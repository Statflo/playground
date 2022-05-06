import React from 'react';

import { classNames } from '../../utils/classnames';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  children,
  className,
  ...otherProps
}: Props) {
  return (
    <div className="flex items-start flex-col">
      <div className="flex items-start flex-row">
        <label
          htmlFor={otherProps.id}
          className="flex items-center text-left cursor-pointer space-x-2"
        >
          <input
            id={otherProps.id}
            type="checkbox"
            className={classNames(
              'w-4 h-4 rounded-sm border border-gray-spacer appearance-none',
              'checked:bg-primary-default checked:border-primary-default checked:text-white',
              'checked:after:content-["✓"] checked:after:font-bold checked:after:relative checked:after:text-xs',
              'checked:after:text-xs checked:after:top-[-6px] checked:after:left-[1px]',
              'disabled:opacity-50 disabled:bg-gray-spacer',
              className ?? ''
            )}
            {...otherProps}
          />
          <span className="inline-block text-sm font-medium text-main-default">
            {children}
          </span>
        </label>
      </div>
    </div>
  );
}
