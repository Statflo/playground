interface PageTitleProps {
    description: string;
    label?: string;
    title: string;
    onClick?: VoidFunction;
}

export default function PageTitle({
    description, label, title, onClick
}: PageTitleProps) {
    return (
        <div className="sm:flex sm:items-center px-1">
            <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-default">
                    {title}
                </h1>
                <p className="mt-2 text-sm text-gray-default">
                    {description}
                </p>
            </div>
            {(label && onClick) &&
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        onClick={onClick}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        {label}
                    </button>
                </div>
            }
        </div>
    )
}