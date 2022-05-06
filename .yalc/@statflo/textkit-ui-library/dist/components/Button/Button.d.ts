import React from 'react';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    large?: boolean;
    reversed?: boolean;
    secondary?: boolean;
    small?: boolean;
}
declare const Button: ({ children, fullWidth, large, reversed, secondary, small, className, ...otherProps }: Props) => JSX.Element;
export default Button;
