import React from 'react';

import { classNames } from '../../utils/classnames';

interface Props {
  completed?: number;
  stages?: number;
}

export default function Stages({ completed = 0, stages = 5 }: Props) {
  return (
    <div className="flex items-center space-x-1">
      {Array.from(Array(stages).keys()).map((index) => {
        return (
          <div
            key={index}
            className={classNames(
              'inline-block w-5 h-2 rounded-sm text-sm',
              completed >= stages
                ? 'bg-success-default'
                : index <= completed
                ? 'bg-warning-l1'
                : 'bg-gray-spacer'
            )}
          />
        );
      })}
    </div>
  );
}
