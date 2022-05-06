import React from 'react';
interface Props {
    children: React.ReactNode;
    refreshLabel?: string;
    onRefresh?: VoidFunction;
}
export default function WidgetError({ children, refreshLabel, onRefresh, }: Props): JSX.Element;
export {};
