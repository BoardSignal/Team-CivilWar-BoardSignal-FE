import { ChangeEvent, ComponentPropsWithoutRef } from 'react';

import Icon from '../Icon';

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ children, checked, onChange, ...props }: CheckboxProps) => {
  return (
    <div className='flex items-center gap-2'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        id='checkbox'
        className='peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-gray-accent7'
        {...props}
      />
      <label htmlFor='checkbox' className='text-gray-accent2'>
        {children}
      </label>
      <Icon
        id='check-line'
        className='pointer-events-none absolute hidden w-5 w-5 text-primary peer-checked:block'
      />
    </div>
  );
};

export default Checkbox;
