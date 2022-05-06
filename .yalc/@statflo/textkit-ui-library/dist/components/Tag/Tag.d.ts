import React from 'react';
interface Props {
    children: React.ReactNode;
    type?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}
export default function Segment({ children, type }: Props): JSX.Element;
export {};
