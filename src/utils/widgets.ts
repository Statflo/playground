import { WidgetScope, WidgetType, WidgetViewSize, } from "@statflo/textkit-widget-events";
import { Widget, WidgetPropertyState, WidgetState } from "../types";

export function getEnvironmentWidgets(widgets: WidgetState, envId: string) {
    return Object.values(widgets).filter(
        widget => widget.enabled && widget.env_id === envId
    );
}

export function getStandardWidgets(widgets: Widget[]): Widget[] {
    return widgets.filter(widget => widget.type === WidgetType.Standard);
}

export function getTimelineWidget(widgets: Widget[]): Widget | null {
    const timeline = widgets.filter(widget => widget.type === WidgetType.Timeline);
    return (timeline.length > 0) ? timeline[0] : null;
}

export function getActionWidgets(widgets: Widget[]): Widget[] {
    return widgets.filter(widget => widget.type === WidgetType.Action && widget.scope === WidgetScope.Conversation);
}

export function getUserActionWidget(widgets: Widget[]): Widget | null {
    const userActions = widgets.filter(widget => widget.type === WidgetType.Action && widget.scope === WidgetScope.User);
    return (userActions.length > 0) ? userActions[0] : null;
}

export function getSendableWidgets(widgets: Widget[]): Widget[] {
    return widgets.filter(widget => widget.type === WidgetType.Sendable);
}

export function getTimelineMaxHeight(): number {
    const infoHeight = document.getElementById('right-info-container')?.clientHeight;
    const actionHeight = document.getElementById('action-menu-container')?.clientHeight;
    return window.innerHeight - (infoHeight ?? 0) - (actionHeight ?? 0);
}

export function getSendableMaxHeight(): number {
    const messageBar = document.getElementById('message-bar-container')?.clientHeight;
    const height: number = window.innerHeight;
    return height - 60 - (messageBar ?? 0) - 44;
}

export function getWidgetMaxHeight(): number {
    const height: number = window.innerHeight;
    return height - 60 - 44;
}

export function createWidgetPropertyState(widget: Widget): WidgetPropertyState {
    return {
        containerDomain: 'containerDomain',
        footer: null,
        header: null,
        id: widget.id,
        isOpen: false,
        isReady: false,
        isShown: false,
        label: null,
        maxHeight: null,
        size: WidgetViewSize.Medium,
        type: widget.type,
        url: widget.url,
        widgetDomain: widget.domain
    }
}
