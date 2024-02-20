import { InputHTMLAttributes } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

const inputCSS = cva(
  'w-full rounded-lg border border-gray-accent7 p-4 text-gray-accent2',
  {
    variants: {
      variant: {
        active: 'placeholder-gray-accent4 focus:outline-gray-accent2',
        disabled: 'cursor-not-allowed bg-gray-accent7 placeholder-gray-accent3',
      },
    },
  },
);
interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputCSS> {}

const TextInput = ({
  variant,
  placeholder,
  disabled,
  onChange,
  ...props
}: TextInputProps) => {
  return (
    <input
      {...props}
      disabled={disabled}
      placeholder={placeholder}
      className={inputCSS({ variant })}
      onChange={onChange}
    />
  );
};

export default TextInput;
