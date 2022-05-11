import { DropdownOption } from "@statflo/textkit-ui-library";
import { WidgetScope, WidgetType } from "@statflo/textkit-widget-events";
import { EnvironmentState } from "../types";

export const typeOptions = [
    { id: '1', label: 'Action', value: WidgetType.Action },
    { id: '2', label: 'Sendable', value: WidgetType.Sendable },
    { id: '3', label: 'Standard', value: WidgetType.Standard },
    { id: '4', label: 'Timeline', value: WidgetType.Timeline },
];

export const scopeOptions = [
    { id: '1', label: 'User', value: WidgetScope.User },
    { id: '2', label: 'Conversation', value: WidgetScope.Conversation },
];

export function getEnvList( envs: EnvironmentState) {
    const list: DropdownOption[] = [
        { id: '0', label: 'Select Environment', value: '0' }
    ];

    Object.values(envs).forEach(opt => {
        list.push({
            id: opt.id,
            label: opt.name,
            value: opt.id
        })
    });

    return list;
}

export function getEnv(id: string | number, list: DropdownOption[]) {
    const env = list.filter(item => item.id === id);

    return (env.length > 0) 
        ? env[0]
        : null;
}
