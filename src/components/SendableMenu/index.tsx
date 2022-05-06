import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import PlusIcon from "../../icons/PlusIcon";

export default function SendableMenu() {
    return (
        <Menu as="div" className="relative">
            <Menu.Button disabled={true} className="flex items-center justify-center w-12 h-12 text-main-default disabled:opacity-30 bg-white">
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