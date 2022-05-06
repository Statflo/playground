import React from 'react';

import { classNames } from '../../utils/classnames';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export default function TextAreaInput({
  error = false,
  className,
  ...otherProps
}: Props) {
  return (
    <textarea
      rows={2}
      className={classNames(
        'w-full border text-sm font-medium rounded-md px-3 py-2 placeholder:text-main-l2 bg-white',
        error
          ? 'bg-error-l2 border-error-default text-main-default'
          : 'text-main-default border-gray-spacer',
        className ?? ''
      )}
      {...otherProps}
    />
  );
}
