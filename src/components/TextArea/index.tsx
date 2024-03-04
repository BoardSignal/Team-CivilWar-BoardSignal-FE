import { ComponentPropsWithoutRef, forwardRef } from 'react';

const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<'textarea'>
>(({ ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className='h-[180px] w-full resize-none appearance-none overscroll-contain rounded-lg border border-gray-accent7 p-4 outline-gray-accent2'
      {...props}
    />
  );
});

export default Textarea;
