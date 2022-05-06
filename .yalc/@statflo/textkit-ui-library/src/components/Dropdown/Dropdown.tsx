import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';

import { classNames } from '../../utils/classnames';
import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';

import GroupedOptions from './GroupedOptions';

export type DropdownOption = {
  id: string | number;
  disabled?: boolean;
  label: string;
  value?: string;
  options?: DropdownOption[];
};

interface Props {
  openTop?: boolean;
  options: DropdownOption[];
  placeholder?: string;
  selected?: DropdownOption;
  onChange: (option: DropdownOption) => void;
}

export default function Dropdown({
  openTop = false,
  options = [],
  placeholder = 'Select',
  selected,
  onChange,
}: Props) {
  const [selectedOption, setSelectedOption] =
    useState<DropdownOption | undefined>(selected);
  const [grouped, setGrouped] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (options.length > 0 && options[0].options && options[0].options.length > 0) {
      setGrouped(true);
    }
  }, [options]);

  const handleOnChange = (option: DropdownOption) => {
    setSelectedOption(option);
    onChange(option);
  };

  const filteredOptions = () => {
    if (query === '') {
      return options;
    }

    const list: DropdownOption[] = [];

    options.forEach((opt) => {
      if (opt.options && opt.options.length > 0) {
        const filteredOpts = opt.options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );
        if (filteredOpts.length > 0) {
          list.push({
            ...opt,
            options: filteredOpts,
          });
        }
      }

      if (!opt.options || opt.options.length === 0) {
        if (opt.label.toLowerCase().includes(query.toLowerCase())) {
          list.push(opt);
        }
      }
    });

    return list;
  };

  return (
    <Listbox value={selectedOption} onChange={handleOnChange}>
      {({ open }) => (
        <div className="relative block">
          <Listbox.Button className="w-full border rounded-md border-gray-spacer bg-white text-left h-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-default">
            <Listbox.Label className="px-4 select-none flex items-center justify-between text-main-default cursor-pointer space-x-2 h-8 rounded-sm">
              <span className="text-sm font-medium text-main-default flex-1 truncate">
                {selectedOption ? selectedOption.label : placeholder}
              </span>
              {open ? (
                <ChevronUp className="w-2 h-2 text-main-l2" />
              ) : (
                <ChevronDown className="w-2 h-2 text-main-l2" />
              )}
            </Listbox.Label>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <div
              className={classNames(
                'absolute w-full text-base bg-white rounded-md shadow-md focus:outline-none border border-gray-spacer overflow-hidden',
                openTop ? 'bottom-11' : 'mt-1'
              )}
            >
              <Listbox.Options className="w-full overflow-auto max-h-60 text-sm focus:outline-none">
                {filteredOptions().length === 0 ? (
                  <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  <div
                    className={
                      grouped ? 'divide-y divide-gray-space' : ''
                    }
                  >
                    {filteredOptions().map((option) => {
                      if (option.options && option.options.length > 0) {
                        return (
                          <GroupedOptions
                            key={option.id}
                            group={option}
                            selectedOption={selectedOption}
                          />
                        );
                      } else {
                        return (
                          <Listbox.Option
                            key={option.id}
                            className={({ active }) =>
                              classNames(
                                'cursor-default select-none relative py-2 px-4',
                                active ? 'bg-gray-hover text-main-default' : '',
                                selectedOption &&
                                  selectedOption.id === option.id
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
                        );
                      }
                    })}
                  </div>
                )}
              </Listbox.Options>
            </div>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
