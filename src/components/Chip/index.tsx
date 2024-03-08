import { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

const chipCSS = cva(
  'flex w-fit items-center rounded-2xl border border-primary px-2 py-0.5',
  {
    variants: {
      size: {
        small: 'text-[10px]',
        large: 'rounded-3xl px-4 py-2',
      },
      variant: {
        outline: 'text-primary',
        fill: 'bg-primary text-white',
      },
    },
    defaultVariants: {
      size: 'small',
      variant: 'outline',
    },
  },
);

type ChipProps = VariantProps<typeof chipCSS> & {
  children: ReactNode;
};

const Chip = ({ size, variant, children, ...props }: ChipProps) => {
  return (
    <div className={chipCSS({ size, variant })} {...props}>
      {children}
    </div>
  );
};

export default Chip;
