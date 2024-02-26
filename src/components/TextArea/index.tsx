import { ComponentPropsWithoutRef } from 'react';

const Textarea = ({ ...props }: ComponentPropsWithoutRef<'textarea'>) => {
  return (
    <textarea
      className='h-[180px] w-full resize-none overscroll-contain rounded-lg border border-gray-accent7 p-5 outline-none focus:border-gray-accent2'
      {...props}
    />
  );
};

export default Textarea;
