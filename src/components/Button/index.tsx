import { ComponentProps } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

import Ripple, { RippleProps } from '../Ripple';

const buttonCSS = cva(
  'flex h-10 w-full cursor-pointer items-center justify-center rounded-lg',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        outline: 'border border-gray-accent5 text-gray-accent3',
        ghost: 'text-gray-accent2',
        danger: 'border border-red-500 text-red-500',
        inactive: 'cursor-not-allowed bg-gray-accent5 text-gray-accent3',
      },
    },
    defaultVariants: {
      variant: 'ghost',
    },
  },
);

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonCSS> &
  RippleProps;

const Button = ({ variant, className, ...props }: ButtonProps) => {
  return (
    <Ripple
      className={cn(
        buttonCSS({ variant }),
        variant === 'inactive' && 'pointer-events-none',
        className,
      )}
      {...props}
    />
  );
};

export default Button;
