import { Segment } from "@statflo/textkit-ui-library";
import MessageBubbleIcon from "../../icons/MessageBubbleIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import PinIcon from "../../icons/PinIcon";
import { useContainer } from '../../providers/ContainerProvider';
import { useStorage } from "../../providers/StorageProvider";

export default function RightInfo() {
    const { tab, setTab, contact } = useContainer();
    const { contacts } = useStorage();

    return (
        <div id="right-info-container" className="w-full bg-white pt-6 pb-2 border-b border-gray-spacer">
            <h2 className="w-full font-bold text-xl text-main-default text-center mb-4 select-none">
                {contact ? contacts[contact].name : `No user selected`}
            </h2>
            <div className="flex items-center text-main-l3 px-4 py-2">
                <PinIcon className="w-5 h-5" />
                <span className="ml-4 text-main-default font-normal select-none">
                    123 Main Street, ON, Canada
                </span>
            </div>
            <div className="flex items-center text-main-l3 px-4 py-2">
                <PhoneIcon className="w-5 h-5" />
                <span className="ml-4 text-primary-default font-normal select-none">
                    +1 (416) 555-1212 (ext: 123)
                </span>
            </div>
            <div className="flex items-center text-main-l3 px-4 py-2">
                <MessageBubbleIcon className="w-5 h-5" />
                <span className="ml-4 text-main-default font-normal select-none">
                    Text Preferred | English
                </span>
            </div>

            <div className="px-4 py-4">
                <Segment 
                    activeIndex={tab}
                    items={['Widgets', 'Timeline']}
                    onChange={(_name, index) => setTab(index)}
                />
            </div>
        </div>
    )
}