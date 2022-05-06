import React from 'react';

import Refresh from '../icons/Refresh';
import Warning from '../icons/Warning';

interface Props {
  children: React.ReactNode;
  refreshLabel?: string;
  onRefresh?: VoidFunction;
}

export default function WidgetError({
  children,
  refreshLabel = 'Reload Widget',
  onRefresh,
}: Props) {
  return (
    <div className="flex items-center justify-center flex-col py-20 space-y-7">
      <div className="flex items-center justify-center flex-col text-warning-l1 space-y-2">
        <Warning className="h-8 w-8" />
        <div className="font-medium text-main-default leading-5 text-center">
          {children}
        </div>
      </div>
      {onRefresh && (
        <button className="text-primary-default flex items-center justify-center text-sm space-x-1">
          <Refresh className="w-4 h-4" />
          <span>{refreshLabel}</span>
        </button>
      )}
    </div>
  );
}
