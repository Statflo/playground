import { Button } from "@statflo/textkit-ui-library";

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
                    <Button onClick={onClick}>
                        {label}
                    </Button>
                </div>
            }
        </div>
    )
}