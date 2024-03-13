import { useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { format } from 'date-fns';

import TextInputWithIcon from '../TextInputWithIcon';
import Calendar from './Calendar';

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
}

const DatePicker = ({ value, onChange }: DatePickerProps) => {
  const [date, setDate] = useState<Date>();

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date);
    onChange(date ? format(date, 'yyyy-MM-dd') : '');
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <TextInputWithIcon iconId='calendar-line' readOnly value={value} />
        </PopoverTrigger>
        <PopoverContent className='z-20 w-auto p-0' align='start'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
            className='rounded-lg border border-gray-accent7 bg-gray-bg-base p-4 text-gray-base'
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DatePicker;
