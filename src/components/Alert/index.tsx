import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const alertCSS = cva('mx-auto my-4 flex w-full rounded-md px-6 py-4 text-xs', {
  variants: {
    variant: {
      primary: 'bg-primary-lighter text-primary',
      normal: 'bg-gray-accent7 text-gray-accent2',
      danger: 'bg-red-100 text-red-500',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface AlertProps
  extends VariantProps<typeof alertCSS>,
    ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}

const Alert = ({ children, variant, className, ...props }: AlertProps) => {
  return (
    <div className={cn(alertCSS({ variant }), className)} {...props}>
      <label className='whitespace-nowrap font-bold'>안내</label>
      <span className='ml-2'>{children}</span>
    </div>
  );
};

export default Alert;
