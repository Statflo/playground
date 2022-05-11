import IframeResizer from "iframe-resizer-react";
import { useEffect, useState } from "react";
import { WidgetPropertyState } from "../../types";
import classNames from "../../utils/classnames";
import { getTimelineMaxHeight } from '../../utils/widgets';

interface TimelineWidgetProps {
    visible: boolean;
    widget: WidgetPropertyState
}

export default function TimelineWidget({ visible, widget }: TimelineWidgetProps) {
    const [maxHeight, setMaxHeight] = useState<number>(0);
    
    useEffect(() => {
        setMaxHeight(getTimelineMaxHeight());        
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