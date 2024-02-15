import { ButtonHTMLAttributes } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import Ripple from '../Ripple';

const buttonCSS = cva('h-10 w-full rounded-lg', {
  variants: {
    variant: {
      primary: 'bg-primary text-white',
      outline: 'border-[1px] border-gray-accent5 text-gray-accent3',
      danger: 'border-[1px] border-red-500 text-red-500',
      inactive: 'cursor-not-allowed bg-gray-accent5 text-gray-accent3',
    },
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCSS> {}

const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <Ripple>
      <button
        disabled={variant === 'inactive'}
        className={buttonCSS({ variant })}
        {...props}
      />
    </Ripple>
  );
};

export default Button;
