import { EventNames, WidgetState } from "@statflo/textkit-widget-events";
import React, { useEffect, useState } from "react";
import { containerClient } from "../..";
import { useLogger } from "../../providers/LogProvider";
import { useWidgets } from "../../providers/WidgetProvider";
import { createLog } from "../../utils/logs";
import { getSendableMaxHeight } from "../../utils/widgets";
import EnvSelector from "../EnvSelector";
import MessageBar from "../MessageBar";
import SendableWidget from "../Widgets/Sendable";

export default function Main({ children, title }: { children: React.ReactNode, title: string }) {
    const [message, setMessage] = useState<string>('');
    const { addSentLog } = useLogger();
    const { sendableWidgets, state } = useWidgets();

    useEffect(() => {
        containerClient.on(EventNames.widget.appendTextToMessage, (e) => {
            setMessage(input => input.length > 0 ? `${input} ${e.payload}` : e.payload);
        });
        containerClient.on(EventNames.widget.replaceTextMessage, (e) => {
            setMessage(e.payload);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOpenSendable = (id: string) => {
        const maxHeight = getSendableMaxHeight();

        containerClient.setState(id, WidgetState.isOpen, true);
        containerClient.setState(id, WidgetState.maxHeight, maxHeight);
        addSentLog([
            createLog(id, WidgetState.isOpen, true),
            createLog(id, WidgetState.maxHeight, maxHeight)
        ]);
    }

    const handleCloseSendable = (id: string) => {
        containerClient.setState(id, WidgetState.isOpen, false);
        addSentLog([
            createLog(id, WidgetState.isOpen, false)
        ]);
    }

    return (
        <section className="relative flex flex-col flex-1 box-border">
            <div className="flex items-center justify-between w-full h-[72px] box-border bg-white border-b border-gray-spacer">
                <h3 className="text-main-default px-4">
                    {title}
                </h3>
                <EnvSelector />
            </div>
            <div className="flex-1 bg-[color:#f0f1f4] bg-content bg-33 p-6 overflow-x-hidden overflow-y-auto">
                {children}
            </div>
            <MessageBar
                sendableWidgets={sendableWidgets}
                state={state}
                message={message}
                onChange={setMessage}
                onSelectSendable={handleOpenSendable}
            />
            {sendableWidgets.map(widget => (
                <SendableWidget 
                    key={widget.id}
                    widget={state[widget.id]}
                    visible={state[widget.id].isOpen}
                    onClose={() => handleCloseSendable(widget.id)}
                />
            ))}
        </section>
    )
}