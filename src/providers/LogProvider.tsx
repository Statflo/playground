import React, { useCallback, useContext, useMemo, useState } from "react";
import { Log, LogContextState } from "../types";

export const LogContext = React.createContext<LogContextState>(null!);

export function useLogger() {
    return useContext(LogContext);
}

export const LogProvider = ({ children }: { children: React.ReactNode}) => {
    const [receivedLogs, setReceivedLogs] = useState<Log[]>([]);
    const [sentLogs, setSentLogs] = useState<Log[]>([]);

    const addReceivedLog = useCallback((logs: Log[]) => {
        setReceivedLogs(state => [...logs, ...state]);
    }, [setReceivedLogs]);

    const addSentLog = useCallback((logs: Log[]) => {
        setSentLogs(state => [...logs, ...state]);
    }, [setSentLogs]);

    const clearReceivedLog = useCallback(() => {
        setReceivedLogs([]);
    }, [setReceivedLogs]);

    const clearSentLog = useCallback(() => {
        setSentLogs([]);
    }, [setSentLogs]);

    const context = useMemo(() => ({
        sentLogs,
        clearSentLog,
        addSentLog,
        receivedLogs,
        addReceivedLog,
        clearReceivedLog,
    }), [sentLogs, receivedLogs, clearReceivedLog, clearSentLog, addReceivedLog, addSentLog]);

    return (
        <LogContext.Provider value={context}>
            {children}
        </LogContext.Provider>
    )
}