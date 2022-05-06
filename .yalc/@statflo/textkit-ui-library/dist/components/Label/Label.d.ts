import React from 'react';
interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}
export default function Label({ children, className, required, ...otherProps }: Props): JSX.Element;
export {};
