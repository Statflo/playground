import { ContainerClient, Helpers } from "@statflo/textkit-widget-events";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Page = 'logs' | 'manageContacts' | 'manageWidgets' | 'manageEnv' | 'upload' | 'download';

type Notification = { title: string, message: string };

const ContainerContext = createContext<{ 
    client: ContainerClient,
    contact?: string;
    setContact: React.Dispatch<React.SetStateAction<string|undefined>>;
    env?: string;
    setEnv: React.Dispatch<React.SetStateAction<string|undefined>>;
    notification?: Notification;
    setNotification: React.Dispatch<React.SetStateAction<Notification|undefined>>;
    page: Page;
    setPage: React.Dispatch<React.SetStateAction<Page>>;
    tab: number;
    setTab: React.Dispatch<React.SetStateAction<number>>;
    event?: Helpers.WidgetPostEventType;
}>(null!);

export function useContainer() {
    return useContext(ContainerContext);
}

const containerClient = new ContainerClient({ window });
let initialized = false;

export default function ContainerProvider({ children }: { children: React.ReactNode }) {
    const [page, setPage] = useState<Page>('logs');
    const [notification, setNotification] = useState<Notification>();
    const [tab, setTab] = useState<number>(0);
    const [contact, setContact] = useState<string>();
    const [env, setEnv] = useState<string>();
    const [client] = useState<ContainerClient>(containerClient);
    const [event, setEvent] = useState<Helpers.WidgetPostEventType>();

    useEffect(() => {
        if (!initialized) {
            client.on(Helpers.WidgetMethods.setState, (e: Helpers.WidgetPostEventType) => {
                setEvent(e);
            });
            initialized = true;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const context = useMemo(() => ({
        client,
        contact,
        setContact,
        env,
        setEnv,
        notification,
        setNotification,
        page,
        setPage,
        tab,
        setTab,
        event
    }), [client, page, env, tab, contact, notification, event]);

    return (
        <ContainerContext.Provider value={context}>
            {children}
        </ContainerContext.Provider>
    );
}