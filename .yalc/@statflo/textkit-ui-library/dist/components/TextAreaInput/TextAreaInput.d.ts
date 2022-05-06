import React from 'react';
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}
export default function TextAreaInput({ error, className, ...otherProps }: Props): JSX.Element;
export {};
