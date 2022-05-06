import React from 'react';

import { classNames } from '../../utils/classnames';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export default function TextInput({
  error = false,
  className,
  ...otherProps
}: Props) {
  return (
    <input
      className={classNames(
        'w-full border text-sm font-medium rounded-md px-3 h-10 placeholder:text-main-l2 bg-white',
        error
          ? 'bg-error-l2 border-error-default text-main-default'
          : 'text-main-default border-gray-spacer',
        className ?? ''
      )}
      {...otherProps}
    />
  );
}
