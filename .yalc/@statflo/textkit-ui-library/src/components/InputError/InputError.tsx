import React from 'react';

import { classNames } from '../../utils/classnames';

type Props = React.HtmlHTMLAttributes<HTMLSpanElement>;

export default function InputError({
  children,
  className,
  ...otherProps
}: Props) {
  return (
    <span
      className={classNames(
        'block text-sm text-error-default text-left font-medium',
        className ?? ''
      )}
      {...otherProps}
    >
      {children}
    </span>
  );
}
