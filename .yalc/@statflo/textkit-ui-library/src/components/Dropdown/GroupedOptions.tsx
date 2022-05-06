import { Listbox } from '@headlessui/react';
import React from 'react';

import { classNames } from '../../utils/classnames';

import { DropdownOption } from './Dropdown';

interface Props {
  group: DropdownOption;
  selectedOption?: DropdownOption;
}

export default function GroupedOptions({ group, selectedOption }: Props) {
  return (
    <div>
      <div className="px-4 pt-3 pb-2 uppercase text-main-l2 text-xs font-medium">
        {group.label}
      </div>
      {group.options &&
        group.options.map((option) => (
          <Listbox.Option
            key={option.id}
            className={({ active }) =>
              classNames(
                'cursor-pointer select-none relative py-2 px-4',
                active ? 'bg-gray-hover text-main-default' : '',
                selectedOption && selectedOption.id === option.id
                  ? 'bg-primary-default text-white'
                  : 'text-main-default'
              )
            }
            value={option}
          >
            <span className="block truncate font-medium">
              {option.label}
            </span>
          </Listbox.Option>
        ))}
    </div>
  );
}
