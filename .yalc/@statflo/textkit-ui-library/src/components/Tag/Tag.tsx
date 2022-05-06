import React from 'react';

import { classNames } from '../../utils/classnames';

interface Props {
  children: React.ReactNode;
  type?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

export default function Segment({ children, type = 'default' }: Props) {
  return (
    <div
      className={classNames(
        'inline-block text-xs font-medium leading-4 px-1 h-4 rounded whitespace-nowrap overflow-hidden select-none',
        type === 'default' ? 'bg-gray-spacer text-main-default' : '',
        type === 'success' ? 'bg-success-l2 text-success-default' : '',
        type === 'warning' ? 'bg-warning-l2 text-warning-default' : '',
        type === 'danger' ? 'bg-error-l2 text-error-default' : '',
        type === 'info' ? 'bg-info-l2 text-info-default' : ''
      )}
    >
      {children}
    </div>
  );
}
