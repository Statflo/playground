import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { useContainer } from './ContainerProvider';
import produce from "immer";
import { WidgetScope, WidgetType, WidgetViewSize } from "@statflo/textkit-widget-events";
import { getActionWidgets, getEnvironmentWidgets, getSendableWidgets, getStandardWidgets, getTimelineWidget, getUserActionWidget } from "../utils/widgets";

export type Environment = {
    id: string;
    name: string;
}

export type EnvironmentState = {
    [key: string]: Environment
}

export type Contact = {
    id: string;
    name: string;
    external: string;
    tag?: string;
}

export type ContactState = {
    [key: string]: Contact
}

export type Widget = {
    id: string;
    env_id: string | number;
    name: string;
    type: WidgetType;
    scope: WidgetScope;
    url: string;
    domain: string;
    order: number;
    enabled: boolean;
}

export type WidgetState = {
    [key: string]: Widget
}

export type PayloadActions = 
    | { type: 'load', payload: StorageState }
    | { type: 'env/register', payload: Environment }
    | { type: 'env/delete', payload: string }
    | { type: 'contact/register', payload: Contact }
    | { type: 'contact/delete', payload: string }
    | { type: 'widget/visibility', payload: { key: string, visible: boolean } }
    | { type: 'widget/register', payload: Widget }
    | { type: 'widget/delete', payload: string }

export type StorageState = {
    env: EnvironmentState;
    contact: ContactState;
    widget: WidgetState;
    logs: {
        sent: any[];
        received: any[];
    }
}

export type TWidgetState = {
    footer: string | null;
    header: string | null;
    id: string;
    isOpen: boolean;
    isReady: boolean;
    isShown: boolean;
    label: string | null;
    maxHeight: number;
    size: WidgetViewSize;
    type: WidgetType;
    url: string;
    widgetDomain: string;
}

export type StorageContextProps = {
    state: StorageState;
    envs: EnvironmentState;
    contacts: ContactState;
    widgets: WidgetState;
    enabledWidgets: Widget[];
    standard: Widget[];
    timeline: Widget|null;
    actions: Widget[];
    add: Widget|null;
    sendables: Widget[];
    dispatch: React.Dispatch<PayloadActions>;
}

const reducer = produce((draft: StorageState, action: PayloadActions) => {
    switch(action.type) {
        case 'load':
            Object.values(action.payload.contact).forEach(item => {
                draft.contact[item.id] = item;
            });
            Object.values(action.payload.env).forEach(item => {
                draft.env[item.id] = item;
            });
            Object.values(action.payload.widget).forEach(item => {
                draft.widget[item.id] = item;
            });
            break;
        case 'contact/delete':
            delete draft.contact[action.payload];
            break;
        case 'contact/register':
            draft.contact[action.payload.id] = action.payload;
            break;
        case 'env/delete':
            delete draft.env[action.payload];
            break;
        case 'env/register':
            draft.env[action.payload.id] = action.payload;
            break;
        case 'widget/delete':
            delete draft.widget[action.payload];
            break;
        case 'widget/register':
            draft.widget[action.payload.id] = action.payload;
            break;
        case 'widget/visibility':
            draft.widget[action.payload.key].enabled = action.payload.visible;
            break;
    }
});

const initialState = {
    env: {},
    contact: {},
    widget: {},
    logs: {
        sent: [],
        received: [],
    }
}

const StorageContext = createContext<StorageContextProps>(null!);

export function useStorage() {
    return useContext(StorageContext);
}

export default function StorageProvider({ children }: { children: JSX.Element }) {
    const { client, env, setEnv } = useContainer();
    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        const storage = localStorage.getItem('textkitPlaygroundConfig');
        const envId = uuid();

        const defaultState: StorageState = {
            env: {
                [envId]: {
                    id: envId,
                    name: 'Default'
                }
            },
            widget: {},
            contact: {},
            logs: {
                sent: [],
                received: []
            }
        }

        if (!storage) {
            dispatch({ type: 'load', payload: defaultState });
            setEnv(envId);
        } else {
            const savedStorage: StorageState = JSON.parse(storage);
            dispatch({ type: 'load', payload: savedStorage });

            if (Object.values(savedStorage.env).length > 0) {
                setEnv(Object.values(savedStorage.env)[0].id);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const duplicateState = { 
            env: { ...state.env },
            contact: { ...state.contact },
            widget: { ...state.widget }
        };

        localStorage.setItem(
            'textkitPlaygroundConfig', 
            JSON.stringify(duplicateState)
        );
    }, [state]);

    const context: StorageContextProps = useMemo(() => {
        const list = getEnvironmentWidgets(state.widget, env ?? '');

        if (list.length > 0) {
            list.forEach(widget => {
                if (!client.states.get(widget.id)) {
                    const { origin } = new URL(widget.url);
                    const { origin: baseOrigin } = window.location;

                    client.createWidget({
                        containerDomain: baseOrigin,
                        footer: null,
                        header: null,
                        id: widget.id,
                        isOpen: false,
                        isReady: false,
                        isShown: false,
                        label: null,
                        maxHeight: null,
                        size: WidgetViewSize.Medium,
                        type: widget.type,
                        url: widget.url,
                        widgetDomain: origin,
                    });
                }
            });
        }

        return {
            state,
            envs: state.env,
            contacts: state.contact,
            widgets: state.widget,
            enabledWidgets: list,
            standard: getStandardWidgets(list),
            timeline: getTimelineWidget(list),
            actions: getActionWidgets(list),
            add: getUserActionWidget(list),
            sendables: getSendableWidgets(list),
            dispatch
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, dispatch, env]);

    return (
        <StorageContext.Provider value={context}>
            {children}
        </StorageContext.Provider>
    );
}