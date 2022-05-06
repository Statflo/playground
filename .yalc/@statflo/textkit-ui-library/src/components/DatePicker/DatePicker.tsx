import React, { useEffect, useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import Calendar from '../icons/Calendar';

interface Props {
  format?: string;
  id: string;
  label?: string;
  placeholder?: string;
  selectedDate?: Date;
  shortDays?: boolean;
  showTimeSelect?: boolean;
  onDateChange: (Date: Date | null) => void;
}

export default function DatePicker({
  format = 'yyyy-MM-dd h:mm aa',
  id,
  label,
  placeholder = 'YYYY-MM-DD 00:00',
  selectedDate,
  shortDays = false,
  showTimeSelect = true,
  onDateChange,
}: Props) {
  const [date, setDate] = useState<Date | null>(null);
  const pickerInput = useRef<ReactDatePicker>(null);

  useEffect(() => {
    if (onDateChange) {
      onDateChange(date);
    }
  }, [date, onDateChange]);

  return (
    <div className="relative w-full border border-gray-spacer rounded-md flex items-center px-3 h-10 focus-within:border-primary-default">
      <ReactDatePicker
        ref={pickerInput}
        id={id}
        className="w-full"
        aria-label={label}
        showTimeSelect={showTimeSelect}
        useWeekdaysShort={shortDays}
        onChange={(date: Date) => setDate(date)}
        selected={selectedDate || date}
        autoComplete="off"
        placeholderText={placeholder ? placeholder : 'YYYY-MM-DD --:--'}
        dateFormat={format ? format : 'yyyy-MM-dd h:mm aa'}
      />
      <div className="absolute cursor-pointer right-3 top-[10px] z-10 w-4 h-4 pointer-events-none">
        <Calendar className="text-main-l2" />
      </div>
    </div>
  );
}
