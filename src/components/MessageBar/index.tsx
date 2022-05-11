import EmojiIcon from "../../icons/EmojiIcon";
import PaperPlaneIcon from "../../icons/PaperPlaneIcon";
import { Widget, WidgetReducerState } from "../../types";
import classNames from "../../utils/classnames";
import SendableMenu from "../SendableMenu";

interface MessageBarProps {
    message: string;
    state: WidgetReducerState;
    sendableWidgets: Widget[];
    onChange: (val: string) => void;
    onSelectSendable: (id: string) => void;
}

export default function MessageBar({ message, state, sendableWidgets, onChange, onSelectSendable }: MessageBarProps) {    
    return (
        <div id="message-bar-container" className="flex items-center h-12 bg-white border-t border-gray-spacer box-border px-2">
            <SendableMenu
                widgets={sendableWidgets}
                state={state}
                onSelect={onSelectSendable}
            />
            <div className="flex items-center justify-center w-12 h-12 text-main-default opacity-30">
                <EmojiIcon className="w-4 h-4" />
            </div>
            <input 
                type="text" 
                className="w-full placeholder:text-main-l3 font-normal text-main-default px-2 focus:ring-0 focus:outline-none"
                placeholder="Type your message"
                value={message}
                onChange={e => onChange(e.currentTarget.value)}
            />
            <div
                className={classNames(
                    'flex items-center justify-center w-12 h-12',
                    message.length > 0 ? 'text-primary-default cursor-pointer' : 'text-main-default cursor-default opacity-30'
                )}
                onClick={() => onChange('')}
            >
                <PaperPlaneIcon className="w-4 h-4 rotate-45" />
            </div>
        </div>
    )
}