import { Helpers, WidgetType, WidgetState as TKWidgetState } from "@statflo/textkit-widget-events";
import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { containerClient } from "..";
import { Environment, EnvironmentState, Widget, WidgetPayloadActions, WidgetProviderState, WidgetReducerState, WidgetState } from "../types";
import { getStorageItem, saveStorageItem } from '../utils/storage';
import { createWidgetPropertyState, getActionWidgets, getEnvironmentWidgets, getSendableWidgets, getStandardWidgets, getTimelineMaxHeight, getTimelineWidget, getUserActionWidget } from "../utils/widgets";
import { useContainer } from "./ContainerProvider";
import { useLogger } from "./LogProvider";
import { createLog } from '../utils/logs';

const WidgetContext = createContext<WidgetProviderState>(null!);

export function useWidgets() {
    return useContext(WidgetContext);
}

function reducer(state: WidgetReducerState = {}, action: WidgetPayloadActions) {
    switch(action.type) {
        case 'widget/insert':
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case 'widget/update':
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    [action.payload.property]: action.payload.value
                }
            }
        default:
            return state;
    }
}

export default function WidgetProvider({ children }: { children: React.ReactNode }) {
    const { env, setEnv } = useContainer();
    const { addReceivedLog, addSentLog } = useLogger();
    const [envs, setEnvs] = useState<EnvironmentState>({});
    const [widgets, setWidgets] = useState<WidgetState>({});
    const [activeWidgets, setActiveWidgets] = useState<Widget[]>([]);
    const [state, dispatch] = useReducer(reducer, {});

    useEffect(() => {
        const savedEnvs = getStorageItem('env') as EnvironmentState;
        setEnvs(savedEnvs);
        setEnv(Object.values(savedEnvs)[0].id);

        const savedWidgets = getStorageItem('widget') as WidgetState;
        setWidgets(savedWidgets);

        Object.values(savedWidgets).forEach((widget) => {
            dispatch({ type: 'widget/insert', payload: createWidgetPropertyState(widget)})
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    containerClient.on(Helpers.WidgetMethods.setState, (e: Helpers.WidgetPostEventType) => {
        const { property, value } = e.payload;
        if (property === 'isReady' && widgets[e.id].type === WidgetType.Timeline) {
            const size = getTimelineMaxHeight();
            containerClient.setState(e.id, TKWidgetState.maxHeight, size);
            addSentLog([
                createLog(e.id, TKWidgetState.maxHeight, size)
            ]);
        }
        dispatch({ type: 'widget/update', payload: {
            id: e.id,
            property,
            value
        }})

        addReceivedLog([
            createLog(e.id, property, value)
        ])
    });

    useEffect(() => {
        if (env) {
            setActiveWidgets(getEnvironmentWidgets(widgets, env));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [env, widgets]);

    useEffect(() => {
        Object.values(widgets).forEach(widget => {
            if (widget.enabled && !containerClient.states.get(widget.id)) {
                containerClient.createWidget({
                    ...state[widget.id]
                });
            }
            if (!widget.enabled && containerClient.widgets.get(widget.id)) {
                containerClient.states.delete(widget.id);
                containerClient.widgets.delete(widget.id);
            }
        });
    }, [widgets, state]);

    const updateEnvironments = (env: Environment) => {
        const list: EnvironmentState = { 
            ...envs, 
            [env.id]: env
        };
        setEnvs(list);
        saveStorageItem('env', list);
    }

    const deleteEnvironment = (id: string) => {
        const list = { ...envs };
        delete list[id];
        setEnvs(list);
        saveStorageItem('env', list);

        const widgetList = { ...widgets };
        Object.values(widgetList).forEach(widget => {
            if (widget.env_id === id) {
                delete widgetList[widget.id];
            }
        });
        setWidgets(widgetList);
        saveStorageItem('widget', widgetList);
    }

    const updateWidgets = (widget: Widget) => {
        const list: WidgetState = {
            ...widgets,
            [widget.id]: widget
        }
        dispatch({ type: 'widget/insert', payload: createWidgetPropertyState(widget)});
        setWidgets(list);
        saveStorageItem('widget', list);
    }

    const deleteWidget = (id: string) => {
        const list = { ...widgets };
        delete list[id];
        setWidgets(list);
        saveStorageItem('widget', list);
    }

    const context = useMemo(() => ({
        state,
        envs,
        updateEnvironments,
        deleteEnvironment,
        widgets,
        updateWidgets,
        deleteWidget,
        activeWidgets,
        standardWidgets: getStandardWidgets(activeWidgets),
        timelineWidget: getTimelineWidget(activeWidgets),
        addWidget: getUserActionWidget(activeWidgets),
        actionWidgets: getActionWidgets(activeWidgets),
        sendableWidgets: getSendableWidgets(activeWidgets)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }) ,[envs, env, widgets, activeWidgets, state]);

    return (
        <WidgetContext.Provider value={context}>
            {children}
        </WidgetContext.Provider>
    )
}