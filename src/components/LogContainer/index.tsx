import { Button } from "@statflo/textkit-ui-library";
import React from "react";

interface LogContainerProps {
    children: React.ReactNode;
    title: string;
    titleRight: React.ReactNode;
    onButtonClick: VoidFunction;
}

export default function LogContainer({ children, title, titleRight, onButtonClick }: LogContainerProps) {
    return (
        <div className="w-full bg-white rounded-md shadow-md p-6">
            <div className="flex items-center justify-between">
                <span className="font-semibold text-main-default text-lg">
                    {title}
                </span>
                {titleRight}
            </div>
            <div className="mt-2 w-full h-80 overflow-auto divide-y divide-gray-spacer border-t border-gray-spacer">
                {children}
            </div>
            <div className="flex items-center justify-center pt-2 border-t border-gray-spacer mt-2">
                <Button onClick={onButtonClick}>Clear logs</Button>
            </div>
        </div>
    )
}