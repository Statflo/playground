import { WidgetScope, WidgetType } from "@statflo/textkit-widget-events";
import { Widget, WidgetState } from "../providers/StorageProvider";

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
