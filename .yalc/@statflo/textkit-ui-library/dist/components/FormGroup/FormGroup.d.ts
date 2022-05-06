import React from 'react';
interface Props {
    children: React.ReactNode;
    error?: string;
    label: string;
    required?: boolean;
}
export default function FormGroup({ children, error, label, required, }: Props): JSX.Element;
export {};
