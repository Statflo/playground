import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useContainer } from "../../providers/ContainerProvider";
import { useWidgets } from "../../providers/WidgetProvider";

export default function EnvSelector() {
    const { env, setEnv } = useContainer();
    const { envs } = useWidgets();

    return (
        <div className="relative">
            <Menu>
                <Menu.Button disabled={Object.values(envs).length === 0} className="bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed">
                    <div className="flex items-start justify-center flex-col h-[72px] px-2 w-40">
                        <span className="block text-xs font-medium text-purple-600">
                            Environment
                        </span>
                        <div className="w-full flex items-center justify-between">
                            <span className="block w-full text-left font-medium text-purple-600 truncate mr-2">
                                {env ? envs[env].name : 'Unknown'}
                            </span>
                            <svg viewBox="0 0 8 6" width="8" height="6" fill="gray">
                                <path d="M0.170436 1.53604L3.58894 5.10135C3.81544 5.33624 4.18456 5.33624 4.41106 5.10135L7.82956 1.53604C8.19448 1.15434 7.93443 0.5 7.4185 0.5H0.581496C0.0655741 0.504194 -0.194484 1.15434 0.170436 1.53604Z"></path>
                            </svg>
                        </div>
                    </div>
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
                    <Menu.Items className="absolute -mt-1 right-1 bg-white rounded-md shadow-sm w-56 py-2">
                        {Object.keys(envs).map(key => (
                            <Menu.Item key={key}>
                                <div onClick={() => setEnv(key)} className="px-2 hover:bg-gray-hover py-1 cursor-pointer">
                                    {envs[key].name}
                                </div>
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}