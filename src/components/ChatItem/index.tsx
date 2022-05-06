import { Tag } from "@statflo/textkit-ui-library";
import classNames from "../../utils/classnames";

interface ChatItemProps {
    active?: boolean;
    external: string;
    id: string;
    tag?: string;
    title: string;
    onClick: (id: string) => void;
}

export default function ChatItem({ active = false, external, id, tag, title, onClick }: ChatItemProps) {
    return (
        <div onClick={() => onClick(id)} className={classNames(
            'group flex w-full pl-4 cursor-pointer h-24 hover:bg-gray-hover hover:text-main-default',
            active ? 'bg-primary-default text-white' : 'text-main-default'
        )}>
            <div className={classNames(
                'flex-1 border-b py-2 pr-4 hover:border-gray-hover',
                active ? 'border-primary-default' : 'border-gray-spacer'
            )}>
                <div className="flex items-center justify-between">
                    <h4 className="font-bold truncate pr-2">
                        {title}
                    </h4>
                    {tag && 
                        <Tag type="success">
                            {tag}
                        </Tag>
                    }
                </div>
                <div className={classNames(
                    'text-sm',
                    active ? 'text-white group-hover:text-main-l2' : 'text-main-l2'
                )}>
                    External ID: {external}
                </div>
            </div>
        </div>
    )
}