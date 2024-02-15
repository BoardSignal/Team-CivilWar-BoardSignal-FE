import { ComponentProps } from 'react';

interface TextareaProps extends ComponentProps<'textarea'> {
  label?: string;
  limit?: number;
}

const Textarea = ({ label, limit, ...props }: TextareaProps) => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center text-gray-700'>
        {label && (
          <label style={{ marginRight: '260px' }}>
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
          className='h-[180px] w-[358px] resize-none overscroll-contain rounded-lg border-2 border-gray-200 outline-none focus:border-violet-500'
          {...props}
        />
      </div>
    </div>
  );
};

export default Textarea;
