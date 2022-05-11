import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import PlusIcon from "../../icons/PlusIcon";
import { Widget, WidgetReducerState } from "../../types";

interface SendableMenuProps {
    widgets: Widget[];
    state: WidgetReducerState;
    onSelect: (id: string) => void;
}

interface ListItem { id: string, label: string }

export default function SendableMenu({ widgets, state, onSelect }: SendableMenuProps) {
    const [list, setList] = useState<ListItem[]>([]);

    useEffect(() => {
        const fullList: ListItem[] = [];
        widgets.forEach(widget => {
            const widgetState = state[widget.id];

            if (widgetState.label) {
                const item: ListItem = {
                    id: widget.id,
                    label: widgetState.label
                };
                fullList.push(item);
            }
        });

        setList(fullList);
    }, [widgets, state]);

    return (
        <Menu as="div" className="relative">
            <Menu.Button disabled={list.length === 0} className="flex items-center justify-center w-12 h-12 text-main-default disabled:opacity-30 bg-white">
                <PlusIcon className="w-4 h-4" />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items className="absolute left-0 bottom-11 w-64 rounded-md bg-white flex flex-col z-10 shadow-sm">
                    {list.map(item => (
                        <Menu.Item key={item.id}>
                            <span
                                onClick={() => onSelect(item.id)}
                                className="text-sm px-4 py-2 hover:bg-gray-hover cursor-pointer"
                            >
                                {item.label}
                            </span>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}