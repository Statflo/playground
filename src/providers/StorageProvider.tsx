import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { useContainer } from './ContainerProvider';
import produce from "immer";
import { WidgetViewSize } from "@statflo/textkit-widget-events";
import { getActionWidgets, getEnvironmentWidgets, getSendableWidgets, getStandardWidgets, getTimelineWidget, getUserActionWidget } from "../utils/widgets";
import { containerClient } from "..";
import { PayloadActions, StorageContextProps, StorageState, Widget } from "../types";

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
    const { env, setEnv } = useContainer();
    const [enabledWidgets, setEnabledWidgets] = useState<Widget[]>([]);
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
            contact: {}
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

        setEnabledWidgets(getEnvironmentWidgets(state.widget, env ?? ''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, env]);

    useEffect(() => {
        if (enabledWidgets.length > 0) {
            enabledWidgets.forEach(widget => {
                if (!containerClient.states.get(widget.id)) {
                    const { origin } = new URL(widget.url);

                    containerClient.createWidget({
                        containerDomain: 'containerDomain',
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
    }, [enabledWidgets]);

    const context: StorageContextProps = useMemo(() => {
        return {
            state,
            envs: state.env,
            contacts: state.contact,
            widgets: state.widget,
            enabledWidgets: enabledWidgets,
            standard: getStandardWidgets(enabledWidgets),
            timeline: getTimelineWidget(enabledWidgets),
            actions: getActionWidgets(enabledWidgets),
            add: getUserActionWidget(enabledWidgets),
            sendables: getSendableWidgets(enabledWidgets),
            dispatch
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, dispatch, env, enabledWidgets]);

    return (
        <StorageContext.Provider value={context}>
            {children}
        </StorageContext.Provider>
    );
}