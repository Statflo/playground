import { Menu, Transition } from "@headlessui/react";
import { Button } from "@statflo/textkit-ui-library";
import { Fragment, useEffect, useState } from "react";
import { Widget, WidgetReducerState } from "../../types";

interface ActionMenuProps {
    widgets: Widget[];
    state: WidgetReducerState;
    onSelect: (id: string) => void;
}

interface ListItem { id: string, label: string }

export default function ActionMenu({ widgets, state, onSelect }: ActionMenuProps) {
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
        <Menu as="div" className="relative flex items-center justify-center w-full">
            <Menu.Button as="div">
                {({ open }) => !open ? (
                    <Button disabled={list.length === 0}>Actions</Button>
                ) : (
                    <Button reversed>Close</Button>
                )}
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
                <Menu.Items className="absolute left-0 right-0 bottom-10 rounded-t-md border-b border-gray-spacer bg-white flex flex-col z-10 shadow-sm">
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