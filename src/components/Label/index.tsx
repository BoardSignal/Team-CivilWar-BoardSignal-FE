import { PropsWithChildren } from 'react';

interface LabelProps extends PropsWithChildren {
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
}: LabelProps) => {
  return (
    <div className='flex flex-col gap-2' style={{ width }}>
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
