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
      <div className='flex items-center justify-between text-gray-700'>
        {label && (
          <label>
            {label}
            <span className='ml-0.5 text-red-500'>*</span>
          </label>
        )}
        <span className='text-sm text-gray-400'>
          {limit && <label>{limit}</label>}/500자
        </span>
      </div>
      <div className='relative'>
        <textarea
          className='h-[180px] w-full resize-none overscroll-contain rounded-lg border-2 border-gray-200 outline-none focus:border-violet-500'
          {...props}
        />
      </div>
    </div>
  );
};

export default Textarea;
