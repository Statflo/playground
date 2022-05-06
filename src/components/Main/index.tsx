import React from "react";
import EnvSelector from "../EnvSelector";
import MessageBar from "../MessageBar";

export default function Main({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <section className="flex flex-col flex-1 box-border">
            <div className="flex items-center justify-between w-full h-[72px] box-border bg-white border-b border-gray-spacer">
                <h3 className="text-main-default px-4">
                    {title}
                </h3>
                <EnvSelector />
            </div>
            <div className="flex-1 bg-[color:#f0f1f4] bg-content bg-33 p-6 overflow-x-hidden overflow-y-auto">
                {children}
            </div>
            <MessageBar />
        </section>
    )
}