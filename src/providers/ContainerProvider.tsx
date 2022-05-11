import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ContainerState, Page, Notification, Contact } from "../types";

const ContainerContext = createContext<ContainerState>(null!);

export function useContainer() {
    return useContext(ContainerContext);
}

let initialized = false;

export default function ContainerProvider({ children }: { children: React.ReactNode }) {
    const [page, setPage] = useState<Page>('logs');
    const [notification, setNotification] = useState<Notification>();
    const [tab, setTab] = useState<number>(0);
    const [contact, setContact] = useState<Contact>();
    const [env, setEnv] = useState<string>();

    useEffect(() => {
        if (!initialized) {
            initialized = true;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const context = useMemo(() => ({
        contact,
        setContact,
        env,
        setEnv,
        notification,
        setNotification,
        page,
        setPage,
        tab,
        setTab
    }), [page, env, tab, contact, notification]);

    return (
        <ContainerContext.Provider value={context}>
            {children}
        </ContainerContext.Provider>
    );
}