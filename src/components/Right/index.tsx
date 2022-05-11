import { WidgetState } from "@statflo/textkit-widget-events";
import { containerClient } from "../..";
import { useContainer } from "../../providers/ContainerProvider";
import { useLogger } from "../../providers/LogProvider";
import { useWidgets } from "../../providers/WidgetProvider";
import classNames from "../../utils/classnames";
import { createLog } from "../../utils/logs";
import { getWidgetMaxHeight } from "../../utils/widgets";
import ActionMenu from "../ActionMenu";
import RightInfo from "../RightInfo";
import ActionWidget from "../Widgets/Action";
import StandardWidget from "../Widgets/Standard";
import TimelineWidget from "../Widgets/Timeline";

export default function Right() {
    const { addSentLog } = useLogger();
    const { tab } = useContainer();
    const { standardWidgets, actionWidgets, timelineWidget, addWidget, state } = useWidgets();

    const handleOpenAction = (id: string) => {
        const maxHeight = getWidgetMaxHeight();

        containerClient.setState(id, WidgetState.isOpen, true);
        containerClient.setState(id, WidgetState.maxHeight, maxHeight);
        addSentLog([
            createLog(id, WidgetState.isOpen, true),
            createLog(id, WidgetState.maxHeight, maxHeight)
        ]);
    }

    const handleCloseAction = (id: string) => {
        containerClient.setState(id, WidgetState.isOpen, false);
        addSentLog([
            createLog(id, WidgetState.isOpen, false)
        ]);
    }

    return (
        <aside className="flex flex-col w-[380px] border-l border-gray-spacer box-border bg-gray-secondary">
            <RightInfo />
            <div className={classNames(
                'flex-1 overflow-x-hidden',
                tab === 0 ? 'overflow-y-auto' : 'overflow-y-hidden'
            )}>
                {standardWidgets.map(widget => (
                    <StandardWidget key={widget.id} widget={state[widget.id]} visible={tab === 0} />
                ))}
                {timelineWidget &&
                    <TimelineWidget widget={state[timelineWidget.id]} visible={tab === 1} />
                }
                {actionWidgets.map(widget => (
                    <ActionWidget
                        key={widget.id}
                        widget={state[widget.id]}
                        visible={state[widget.id].isOpen}
                        onClose={() => handleCloseAction(widget.id)}
                    />
                ))}
                {addWidget &&
                    <ActionWidget
                        widget={state[addWidget.id]}
                        visible={state[addWidget.id].isOpen}
                        onClose={() => handleCloseAction(addWidget.id)}
                    />
                }
            </div>
            <div id="action-menu-container" className="relative flex items-center justify-center h-12 bg-white border-t border-gray-spacer box-border">
                <ActionMenu
                    widgets={actionWidgets}
                    state={state}
                    onSelect={handleOpenAction}
                />
            </div>
        </aside>
    )
}