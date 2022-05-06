import React from 'react';

import { classNames } from '../../utils/classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  large?: boolean;
  reversed?: boolean;
  secondary?: boolean;
  small?: boolean;
}

const Button = ({
  children,
  fullWidth = false,
  large = false,
  reversed = false,
  secondary = false,
  small = false,
  className,
  ...otherProps
}: Props) => {
  return (
    <button
      className={classNames(
        'px-3 font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-default select-none disabled:opacity-50',
        large ? 'text-base leading-6' : 'text-sm leading-4',
        small ? 'h-6' : large ? 'h-10' : 'h-8',
        reversed
          ? 'bg-white border border-transparent text-primary-default hover:text-primary-hover hover:bg-gray-hover'
          : secondary
          ? 'bg-white border border-primary-default text-primary-default hover:bg-primary-active hover:bg-opacity-20'
          : 'text-white border border-transparent bg-primary-default hover:bg-primary-hover',
        fullWidth ? 'w-full' : '',
        className ?? ''
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
