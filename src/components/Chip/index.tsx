import { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

const chipCSS = cva(
  'flex w-fit items-center border border-primary text-primary',
  {
    variants: {
      size: {
        small: 'rounded-2xl px-2 py-0.5 text-[10px]',
        large: 'rounded-3xl px-4 py-2',
      },
    },
    defaultVariants: {
      size: 'small',
    },
  },
);

type ChipProps = VariantProps<typeof chipCSS> & {
  children: ReactNode;
};

const Chip = ({ size, children, ...props }: ChipProps) => {
  return (
    <div className={chipCSS({ size })} {...props}>
      {children}
    </div>
  );
};

export default Chip;
