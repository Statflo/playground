import React from "react";

interface LogItemProps {
    name: string;
    type: string;
    value?: any;
}

export default function LogItem({ name, type, value }: LogItemProps) {
    const renderValue = () => {
        if (typeof value === 'boolean') {
            return value.toString();
        }

        if (typeof value === 'object') {
            return JSON.stringify(value);
        }

        return value;
    }

    return (
        <div className="py-2">
            <div className="flex items-center text-sm text-main-l2 leading-6">
                <span className="w-20 text-main-default font-semibold">Widget:</span>
                {name}
            </div>
            <div className="flex items-center text-sm text-main-l2 leading-6">
                <span className="w-20 text-main-default font-semibold">Property</span>
                {type}
            </div>
            <div className="flex items-center text-sm text-main-l2 leading-6">
                <span className="w-20 text-main-default font-semibold">Value</span>
                <pre className="text-sm font-sans">
                    {renderValue()}
                </pre>
            </div>
        </div>
    )
}