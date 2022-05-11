import { WidgetState, WidgetViewSize } from "@statflo/textkit-widget-events";
import IframeResizer from "iframe-resizer-react";
import classNames from "../../utils/classnames";
import ArrowRightIcon from "../../icons/ArrowRightIcon";
import { containerClient } from "../..";
import { WidgetPropertyState } from "../../types";
import { useLogger } from "../../providers/LogProvider";
import { createLog } from '../../utils/logs';
import { getWidgetMaxHeight } from "../../utils/widgets";

interface StandardWidgetProps {
    visible: boolean;
    widget: WidgetPropertyState;
}

export default function StandardWidget({ visible, widget }: StandardWidgetProps) {
    const { addSentLog } = useLogger();

    const handleFooterClick = () => {
        containerClient.setState(widget.id, WidgetState.size, WidgetViewSize.Large);
        addSentLog([
            createLog(widget.id, WidgetState.size, WidgetViewSize.Large)
        ]);
    }

    const handleHeaderClick = () => {
        if (widget.size === WidgetViewSize.Large) {
            return;
        }

        const newSize = widget.size === WidgetViewSize.Medium ? WidgetViewSize.Small : WidgetViewSize.Medium;
        const maxHeight = getWidgetMaxHeight();

        containerClient.setState(widget.id, WidgetState.size, newSize);
        containerClient.setState(widget.id, WidgetState.maxHeight, maxHeight);

        addSentLog([
            createLog(widget.id, WidgetState.size, newSize),
            createLog(widget.id, WidgetState.maxHeight, maxHeight)
        ]);
    }

    return (
        <div
            id={`${widget.id}-widget-standard-container`}
            className={classNames(
                'flex bg-white box-border rounded-md overflow-hidden flex-col',
                !visible ? 'absolute right-[-9999px]' : '',
                widget.size === WidgetViewSize.Large 
                    ? 'absolute m-0 w-[379px] border-0 z-10 top-[60px] right-0 bottom-0 drop-shadow-standard'
                    : 'm-2 w-[363px] border border-gray-spacer'
            )}
        >
            {widget.header &&
                <div onClick={handleHeaderClick} className={classNames(
                    'flex items-center h-11 text-sm text-main-default font-bold',
                    widget.size !== WidgetViewSize.Small ? 'cursor-pointer border-b border-gray-spacer' : 'cursor-default',
                )}>
                    <span className="flex-1 truncate pl-3">{widget.header}</span>
                    <div className={classNames(
                        'w-8 h-4 items-center justify-center text-main-l3',
                        widget.size === WidgetViewSize.Small ? 'rotate-90' : 'rotate-0',
                        widget.size === WidgetViewSize.Large ? 'hidden' : 'flex',
                    )}>
                        <ArrowRightIcon className="w-4 h-4" />
                    </div>
                </div>
            }
            <div className={classNames(
                'w-full overflow-hidden',
                widget.size === WidgetViewSize.Small ? 'none' : 'block'
            )}>
                <IframeResizer 
                    name={widget.id}
                    title={widget.id}
                    id={widget.id}
                    frameBorder={0}
                    seamless
                    src={widget.url}
                    checkOrigin={false}
                    className="flex-1 w-full"
                />
            </div>
            {(widget.footer && widget.size === WidgetViewSize.Medium) &&
                <div onClick={handleFooterClick} className="flex items-center justify-center h-10 text-sm text-primary-default cursor-pointer box-border border-t border-gray-spacer font-medium">
                    {widget.footer}
                </div>
            }
        </div>
    )
}