import EmojiIcon from "../../icons/EmojiIcon";
import PaperPlaneIcon from "../../icons/PaperPlaneIcon";
import SendableMenu from "../SendableMenu";

export default function MessageBar() {
    return (
        <div className="flex items-center h-12 bg-white border-t border-gray-spacer box-border px-2">
            <SendableMenu />
            <div className="flex items-center justify-center w-12 h-12 text-main-default opacity-30">
                <EmojiIcon className="w-4 h-4" />
            </div>
            <input 
                type="text" 
                className="w-full placeholder:text-main-l3 font-normal text-main-default px-2 focus:ring-0 focus:outline-none"
                placeholder="Type your message"
            />
            <div className="flex items-center justify-center w-12 h-12 text-main-default opacity-30">
                <PaperPlaneIcon className="w-4 h-4 rotate-45" />
            </div>
        </div>
    )
}