import { useState } from "react";
import AnswerIcon from "../../icons/AnswerIcon";
import ClosedIcon from "../../icons/ClosedIcon";
import FilterIcon from "../../icons/FilterIcon";
import OpenIcon from "../../icons/OpenIcon";
import PlusIcon from "../../icons/PlusIcon";
import SearchIcon from "../../icons/SearchIcon";
import ToContactIcon from "../../icons/ToContactIcon";
import ChatItem from "../ChatItem";
import { useContainer } from '../../providers/ContainerProvider';
import { useStorage } from "../../providers/StorageProvider";
import { EventNames, WidgetState, WidgetType, WidgetViewSize } from "@statflo/textkit-widget-events";

export default function Chat() {
    const { contact, setContact, client } = useContainer();
    const [query, setQuery] = useState<string>('');
    const { contacts, enabledWidgets } = useStorage();

    const filter = () => {
        if (query.length === 0) {
            return Object.values(contacts);
        }

        return Object.values(contacts).filter(
            contact => (contact.tag) ? (
                contact.name.toLowerCase().includes(query.toLowerCase()) ||
                contact.external.toLowerCase().includes(query.toLowerCase()) ||
                contact.tag.toLowerCase().includes(query.toLowerCase())
            ) : (
                contact.name.toLowerCase().includes(query.toLowerCase()) ||
                contact.external.toLowerCase().includes(query.toLowerCase())
            )
        );
    }

    const changeContact = (id: string) => {
        setContact(id);
        enabledWidgets.forEach(widget => {
            client.post(widget.id, EventNames.container.activeConversationChanged, {
                externalId: contacts[id].external,
                metadata: {}
            });
            console.log('createLog for this activeConversationChanged event');
            const state = client.states.get(widget.id);
            if (widget.type === WidgetType.Standard && state.size === WidgetViewSize.Large) {
                client.setState(widget.id, WidgetState.size, WidgetViewSize.Medium);
                console.log('createLog for widgetSize change');
            }
        });
    }

    return (
        <aside className="flex flex-col w-[350px] border-r border-gray-spacer box-border bg-white">
            <div className="flex items-center px-4 py-4">
                <h2 className="font-semibold text-2xl flex-1">Chats</h2>
                <div className="flex items-center justify-center w-10 h-6 cursor-pointer">
                    <PlusIcon className="w-5 h-5 text-primary-default opacity-20" />
                </div>
                <div className="flex items-center justify-center w-10 h-6 cursor-pointer">
                    <FilterIcon className="w-5 h-5 text-primary-default" />
                </div>
            </div>
            <div className="px-4 pb-2">
                <div className="flex items-center h-9 rounded-md border border-gray-spacer bg-gray-secondary px-2">
                    <SearchIcon className="w-4 h-4 text-main-l3" />
                    <input 
                        type="search"
                        placeholder="Search"
                        className="text-main-default font-normal placeholder:text-main-l3 w-full bg-transparent pl-2 focus:ring-0 focus:outline-none"
                        value={query}
                        onChange={e => setQuery(e.currentTarget.value)}
                    />
                </div>
            </div>
            <div className="flex items-center border-b border-gray-spacer bg-white">
                <div className="flex-1 flex flex-col items-center justify-end h-[60px] text-main-l2">
                    <AnswerIcon className="w-4 h-4" />
                    <span className="text-sm mt-1 mb-1">To Answer</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-[60px] bg-purple-100 text-purple-800 rounded-t-md">
                    <ToContactIcon className="w-4 h-4" />
                    <span className="text-sm mt-1 mb-1">To Contact</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-[60px] text-main-l2">
                    <OpenIcon className="w-4 h-4" />
                    <span className="text-sm mt-1 mb-1">Open</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-[60px] text-main-l2">
                    <ClosedIcon className="w-4 h-4" />
                    <span className="text-sm mt-1 mb-1">Closed</span>
                </div>
            </div>
            <div className="flex-1 overflow-x-hidden overflow-y-auto">
                {filter().map(item => (
                    <ChatItem 
                        id={item.id}
                        active={contact === item.id}
                        key={item.id}
                        title={item.name}
                        tag={item.tag}
                        external={item.external}
                        onClick={changeContact}
                    />
                ))}
            </div>
        </aside>
    )
}