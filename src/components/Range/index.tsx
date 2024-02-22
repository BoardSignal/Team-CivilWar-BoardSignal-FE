import { ChangeEvent, useState } from 'react';

interface RangeProps {
  min: number;
  max: number;
  step: number;
  defaultValue: number[];
  includedValue?: number;
  onChange: (value: number[]) => void;
}

const Range = ({
  min,
  max,
  step,
  defaultValue = [min, max],
  includedValue,
  onChange,
}: RangeProps) => {
  const [from, to] = defaultValue;

  const [minValue, setMinValue] = useState(from);
  const [maxValue, setMaxValue] = useState(to);

  const range = max - min;

  const ticks = Array.from(
    { length: Math.floor(range / step) + 1 },
    (_, i) => min + step * i,
  );

  const handleMinThumb = (e: ChangeEvent<HTMLInputElement>) => {
    if (includedValue && parseInt(e.target.value) > includedValue) {
      return;
    }

    if (parseInt(e.target.value) > maxValue) {
      setMinValue(maxValue);
    } else {
      setMinValue(parseInt(e.target.value));
    }

    onChange && onChange([minValue, maxValue]);
  };

  const handleMaxThumb = (e: ChangeEvent<HTMLInputElement>) => {
    if (includedValue && parseInt(e.target.value) < includedValue) {
      return;
    }

    if (parseInt(e.target.value) < minValue) {
      setMaxValue(minValue);
    } else {
      setMaxValue(parseInt(e.target.value));
    }

    onChange && onChange([minValue, maxValue]);
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
          className={`input-range ${minValue === max ? 'z-10' : 'z-[1px]'}`}
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
          className={`input-range ${maxValue === min ? 'z-10' : 'z-[1px]'}`}
        />
        <datalist
          id='markers'
          className='flex h-fit w-full translate-y-4 justify-between text-primary'
        >
          {ticks.map(tick => (
            <option value={tick}>{tick}</option>
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default Range;
