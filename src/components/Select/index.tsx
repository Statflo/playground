import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select({ children, ...rest }: SelectProps) {
    return (
        <select
            className="inline-block w-40 pl-3 pr-10 py-2 text-base border border-gray-spacer focus:outline-none focus:ring-primary-default focus:border-primary-default sm:text-sm rounded-md appearance-none select-caret"
            {...rest}
        >
            {children}
        </select>
    )
}