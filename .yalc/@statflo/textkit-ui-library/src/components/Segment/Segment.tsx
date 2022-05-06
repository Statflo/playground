import React, { useEffect, useState } from 'react';

import { classNames } from '../../utils/classnames';

interface Props {
  activeIndex?: number;
  items: string[];
  onChange: (name: string, index: number) => void;
}

export default function Segment({ activeIndex = 0, items, onChange }: Props) {
  const [selected, setSelected] = useState<number>(activeIndex);

  useEffect(() => {
    setSelected(activeIndex);
  }, [activeIndex]);

  const handleSwitchItem = (index: number, name: string) => {
    setSelected(index);
    onChange(name, index);
  };

  return (
    <div className="flex w-full h-8 p-[2px] rounded-md cursor-pointer bg-gray-secondary">
      {items.map((item, index) => (
        <button
          type="button"
          key={item}
          className={classNames(
            'flex items-center justify-center flex-1 px-px py-1 text-main-default rounded-md',
            selected === index ? 'bg-white shadow-sm font-bold' : ''
          )}
          onClick={() => handleSwitchItem(index, item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
