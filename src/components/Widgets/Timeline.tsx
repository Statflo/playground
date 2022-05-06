import { WidgetState } from "@statflo/textkit-widget-events";
import IframeResizer from "iframe-resizer-react";
import { useEffect, useState } from "react";
import { useContainer } from "../../providers/ContainerProvider";
import { TWidgetState } from "../../providers/StorageProvider";
import classNames from "../../utils/classnames";

interface TimelineWidgetProps {
    visible: boolean;
    widget: TWidgetState
}

export default function TimelineWidget({ visible, widget }: TimelineWidgetProps) {
    const { client } = useContainer();
    const [maxHeight, setMaxHeight] = useState<number>(0);
    
    useEffect(() => {
        const infoHeight = document.getElementById('right-info-container')?.clientHeight;
        const actionHeight = document.getElementById('action-menu-container')?.clientHeight;
        const maxHeight = window.innerHeight - (infoHeight ?? 0) - (actionHeight ?? 0);
        setMaxHeight(maxHeight);
        console.log('maxHeight', maxHeight);
        
        client.setState(widget.id, WidgetState.maxHeight, maxHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            id={`${widget.id}-widget-timeline-container`}
            className={classNames(
                'flex flex-grow bg-transparent m-0 box-border rounded-none w-[379px] border-0 overflow-hidden flex-col top-auto',
                visible ? 'relative right-auto left-0' : 'absolute -right-[9999px] left-auto'
            )}
            style={{ maxHeight, minHeight: maxHeight, height: maxHeight }}
        >
            <IframeResizer 
                name={widget.id}
                title={widget.id}
                id={widget.id}
                frameBorder={0}
                seamless
                src={widget.url}
                checkOrigin={false}
            />
        </div>
    )
}