import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

interface LabelProps
  extends PropsWithChildren,
    ComponentPropsWithoutRef<'div'> {
  title: string;
  isRequired?: boolean;
  currentLength?: number;
  maxLength?: number;
  width?: string;
}

const Label = ({
  title,
  isRequired = false,
  currentLength,
  maxLength,
  children,
  width,
  className,
  ...props
}: LabelProps) => {
  return (
    <div
      className={cn('flex flex-col gap-2', className)}
      style={{ width }}
      {...props}
    >
      <div className='flex justify-between'>
        <label className='text-sm text-gray-accent2'>
          {title}
          {isRequired && <span className='ml-0.5 text-red-500'>*</span>}
        </label>
        {maxLength && (
          <span className='text-xs text-gray-accent3'>{`${currentLength ? currentLength : 0}/${maxLength}`}</span>
        )}
      </div>
      {children}
    </div>
  );
};

export default Label;
