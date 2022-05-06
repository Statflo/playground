import React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}
export default function TextInput({ error, className, ...otherProps }: Props): JSX.Element;
export {};
