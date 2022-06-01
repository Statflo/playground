import { useState } from "react";
import LogContainer from "../components/LogContainer";
import LogItem from "../components/LogItem";
import Select from "../components/Select";
import { useLogger } from "../providers/LogProvider"
import { useWidgets } from "../providers/WidgetProvider";
import { Log as TLog } from "../types";

export default function Log() {
    const { widgets, activeWidgets } = useWidgets();
    const { receivedLogs, clearReceivedLog, sentLogs, clearSentLog } = useLogger();
    const [receivedFilter, setReceivedFilter] = useState<string>('all');
    const [sentFilter, setSentFilter] = useState<string>('all');

    const filterReceived = (): TLog[] => {
        if (receivedFilter === 'all') {
            return receivedLogs;
        }
        return receivedLogs.filter(log => log.event.name === receivedFilter);
    };

    const filterSent = () => {
        if (sentFilter === 'all') {
            return sentLogs;
        }
        return sentLogs.filter(log => log.event.name === sentFilter);
    };

    return (
        <div className="space-y-4">
            <LogContainer
                title="Received Logs"
                titleRight={
                    <Select value={receivedFilter} onChange={(e) => setReceivedFilter(e.currentTarget.value)}>
                        <option value="all">All</option>
                        {activeWidgets.map(widget => (
                            <option key={widget.id} value={widget.id}>{widget.name}</option>
                        ))}
                    </Select>
                }
                onButtonClick={clearReceivedLog}
            >
                {filterReceived().map(log => (
                    <LogItem 
                        key={log.id}
                        name={widgets[log.event.name].name}
                        type={log.event.type}
                        value={log.event.value}
                    />
                ))}
            </LogContainer>
            
            <LogContainer
                title="Sent Logs"
                titleRight={
                    <Select value={sentFilter} onChange={(e) => setSentFilter(e.currentTarget.value)}>
                        <option value="all">All</option>
                        {activeWidgets.map(widget => (
                            <option key={widget.id} value={widget.id}>{widget.name}</option>
                        ))}
                    </Select>
                }
                onButtonClick={clearSentLog}
            >
                {filterSent().map(log => (
                    <LogItem 
                        key={log.id}
                        name={widgets[log.event.name].name}
                        type={log.event.type}
                        value={log.event.value}
                    />
                ))}
            </LogContainer>
        </div>
    )
}