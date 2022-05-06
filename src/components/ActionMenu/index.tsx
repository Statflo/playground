import { Menu, Transition } from "@headlessui/react";
import { Button } from "@statflo/textkit-ui-library";
import { Fragment } from "react";

export default function ActionMenu() {
    return (
        <Menu as="div" className="relative flex items-center justify-center w-full">
            <Menu.Button as="div">
                {({ open }) => !open ? (
                    <Button disabled={true}>Actions</Button>
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
                    <Menu.Item>
                        <span className="text-sm px-4 py-2">First</span>
                    </Menu.Item>
                    <Menu.Item>
                        <span className="text-sm px-4 py-2">First</span>
                    </Menu.Item>
                    <Menu.Item>
                        <span className="text-sm px-4 py-2">First</span>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}