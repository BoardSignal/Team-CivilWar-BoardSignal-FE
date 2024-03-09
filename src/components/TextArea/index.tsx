import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const textareaCSS = cva(
  'h-[180px] w-full resize-none appearance-none overscroll-contain rounded-lg border border-gray-accent7 p-4 text-gray-accent1 outline-none',
  {
    variants: {
      variant: {
        default: 'focus:ring-2 focus:ring-gray-accent2',
        error: 'ring-2 ring-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type TextareaProps = ComponentPropsWithoutRef<'textarea'> &
  VariantProps<typeof textareaCSS>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, ...props }, ref) => {
    return (
      <textarea ref={ref} className={cn(textareaCSS({ variant }))} {...props} />
    );
  },
);

export default Textarea;
