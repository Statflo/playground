import { WidgetScope, WidgetType, WidgetViewSize } from "@statflo/textkit-widget-events";
import React from "react";

export type Log = {
    id: string;
    date: string;
    event: {
        name: string;
        type: string;
        value?: string;
    }
}

export type LogContextState = {
    receivedLogs: Log[];
    addReceivedLog: (log: Log[]) => void;
    clearReceivedLog: () => void;
    sentLogs: Log[];
    addSentLog: (log: Log[]) => void;
    clearSentLog: () => void;
}

export type Page = 'logs' | 'manageContacts' | 'manageWidgets' | 'manageEnv' | 'upload' | 'download';

export type Notification = { title: string, message: string };

export type ContainerState = { 
    contact?: Contact;
    setContact: React.Dispatch<React.SetStateAction<Contact|undefined>>;
    env?: string;
    setEnv: React.Dispatch<React.SetStateAction<string|undefined>>;
    notification?: Notification;
    setNotification: React.Dispatch<React.SetStateAction<Notification|undefined>>;
    page: Page;
    setPage: React.Dispatch<React.SetStateAction<Page>>;
    tab: number;
    setTab: React.Dispatch<React.SetStateAction<number>>;
}

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

export type ContactProviderState = {
    contacts: Contact[];
    updateContacts: (contact: Contact) => void;
    deleteContact: (id: string) => void;
}

export type WidgetProviderState = {
    state: WidgetReducerState;
    envs: EnvironmentState;
    updateEnvironments: (env: Environment) => void;
    deleteEnvironment: (id: string) => void;
    widgets: WidgetState;
    updateWidgets: (widget: Widget) => void;
    deleteWidget: (id: string) => void;
    activeWidgets: Widget[];
    standardWidgets: Widget[];
    timelineWidget: Widget | null | undefined;
    addWidget: Widget | null | undefined;
    actionWidgets: Widget[];
    sendableWidgets: Widget[];
}

export type WidgetPropertyState = {
    containerDomain: string;
    footer: string | null;
    header: string | null;
    id: string;
    isOpen: boolean;
    isReady: boolean;
    isShown: boolean;
    label: string | null;
    maxHeight: number | null;
    size: string;
    type: string;
    url: string;
    widgetDomain: string;
}

export type WidgetPayloadActions = 
    | { type: 'widget/update', payload: { id: string, property: string, value: any } }
    | { type: 'widget/insert', payload: WidgetPropertyState }

export type WidgetReducerState = {
    [key: string]: WidgetPropertyState;
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