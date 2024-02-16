import { ComponentProps } from 'react';

interface TextareaProps extends ComponentProps<'textarea'> {
  label?: string;
  textCountLimit?: number;
}

const Textarea = ({
  label,
  textCountLimit: limit,
  ...props
}: TextareaProps) => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between text-gray-accent2'>
        {label && (
          <label>
            {label}
            <span className='ml-0.5 text-red-500'>*</span>
          </label>
        )}
        <span className='text-sm text-gray-accent3'>
          {limit && <label>{limit}</label>}/500자
        </span>
      </div>
      <div className='relative'>
        <textarea
          className='h-[180px] w-full resize-none overscroll-contain rounded-lg border border-gray-accent7 outline-none focus:border-primary'
          {...props}
        />
      </div>
    </div>
  );
};

export default Textarea;
