import React from "react";

export default function NavButton({ children, onClick }: { children: React.ReactNode, onClick: VoidFunction }) {
    return (
        <div onClick={onClick} className="flex items-center justify-center w-12 h-12 text-white hover:text-main-l3 cursor-pointer">
            {children}
        </div>
    )
}