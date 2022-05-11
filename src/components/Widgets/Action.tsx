import IframeResizer from "iframe-resizer-react";
import RemoveIcon from "../../icons/RemoveIcon";
import { WidgetPropertyState } from "../../types";
import classNames from "../../utils/classnames";

interface ActionWidgetProps {
    visible: boolean;
    widget: WidgetPropertyState;
    onClose: VoidFunction;
}

export default function ActionWidget({ visible, widget, onClose }: ActionWidgetProps) {
    return (
        <div
            id={`${widget.id}-widget-action-container`}
            className={classNames(
                'flex bg-white box-border rounded-md overflow-hidden flex-col',
                !visible ? 'absolute right-[-9999px]' : '',
                (widget.isShown || widget.isOpen) 
                    ? 'absolute m-0 w-[379px] border-0 z-10 top-[60px] right-0 bottom-0 drop-shadow-standard'
                    : 'm-2 w-[363px] border border-gray-spacer'
            )}
        >
            <div className="flex items-center h-11 text-sm text-main-default font-bold border-b border-gray-spacer">
                <span className="flex-1 truncate pl-3">{widget.header}</span>
                <div className="w-8 h-4 items-center justify-center text-main-l3 cursor-pointer" onClick={onClose}>
                    <RemoveIcon className="w-4 h-4" />
                </div>
            </div>
            <div>
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
        </div>
    )
}