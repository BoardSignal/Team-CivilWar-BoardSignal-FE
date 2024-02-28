import { ChangeEvent } from 'react';

import { cn } from '@/utils/cn';

interface RangeProps {
  min: number;
  max: number;
  step: number;
  value: number[];
  includedValue?: number;
  onChange: (values: number[]) => void;
}

const Range = ({
  min,
  max,
  step,
  value,
  includedValue,
  onChange,
}: RangeProps) => {
  const [minValue, maxValue] = value;

  const range = max - min;

  const ticks = Array.from(
    { length: Math.floor(range / step) + 1 },
    (_, i) => min + step * i,
  );

  const handleMinThumb = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value);

    if (includedValue !== undefined && inputValue > includedValue) {
      return;
    }

    const nextMinValue = Math.min(maxValue, inputValue);

    onChange([nextMinValue, maxValue]);
  };

  const handleMaxThumb = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value);

    if (includedValue !== undefined && inputValue < includedValue) {
      return;
    }

    const nextMaxValue = Math.max(minValue, inputValue);

    onChange([minValue, nextMaxValue]);
  };

  return (
    <div className='mx-auto w-full px-4'>
      <div className='relative'>
        <input
          type='range'
          value={minValue}
          min={min}
          max={max}
          step={step}
          list='markers'
          onChange={handleMinThumb}
          className={cn(
            'input-range',
            minValue === max
              ? '[&::-moz-range-thumb]:z-10 [&::-webkit-slider-thumb]:z-10'
              : '[&::-moz-range-thumb]:z-[1] [&::-webkit-slider-thumb]:z-[1]',
          )}
        />
        <input
          type='range'
          value={maxValue}
          min={min}
          max={max}
          step={step}
          list='markers'
          style={{
            background: `linear-gradient(
            to right,
            #f0f0f0 0%,
            #f0f0f0 ${((minValue - min) / range) * 100}%,
            #8b5cf6 ${((minValue - min) / range) * 100}%,
            #8b5cf6 ${((maxValue - min) / range) * 100}%,
            #f0f0f0 ${((maxValue - min) / range) * 100}%,
            #f0f0f0 100%
          )`,
          }}
          onChange={handleMaxThumb}
          className={cn(
            'input-range',
            maxValue === min
              ? '[&::-moz-range-thumb]:z-10 [&::-webkit-slider-thumb]:z-10'
              : '[&::-moz-range-thumb]:z-[1] [&::-webkit-slider-thumb]:z-[1]',
          )}
        />
        <datalist
          id='markers'
          className='flex h-fit w-full translate-y-4 justify-between text-gray-accent2'
        >
          {ticks.map(tick => (
            <option key={tick} value={tick}>
              {tick}
            </option>
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default Range;
