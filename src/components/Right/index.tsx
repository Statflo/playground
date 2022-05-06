import { WidgetState, WidgetViewSize } from "@statflo/textkit-widget-events";
import { useEffect, useState } from "react";
import { useContainer } from "../../providers/ContainerProvider";
import { useStorage, Widget } from "../../providers/StorageProvider";
import classNames from "../../utils/classnames";
import ActionMenu from "../ActionMenu";
import RightInfo from "../RightInfo";
import StandardWidget from "../Widgets/Standard";
import TimelineWidget from "../Widgets/Timeline";

export default function Right() {
    const { client, tab } = useContainer();
    const { standard, timeline } = useStorage();

    return (
        <aside className="flex flex-col w-[380px] border-l border-gray-spacer box-border bg-gray-secondary">
            <RightInfo />
            <div className={classNames(
                'flex-1 overflow-x-hidden',
                tab === 0 ? 'overflow-y-auto' : 'overflow-y-hidden'
            )}>
                {standard.map(widget => (
                    <StandardWidget key={widget.id} widget={client.states.get(widget.id)} visible={tab === 0} />
                ))}
                {timeline &&
                    <TimelineWidget widget={client.states.get(timeline.id)} visible={tab === 1} />
                }
            </div>
            <div id="action-menu-container" className="relative flex items-center justify-center h-12 bg-white border-t border-gray-spacer box-border">
                <ActionMenu />
            </div>
        </aside>
    )
}