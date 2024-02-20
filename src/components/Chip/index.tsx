import { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

const ChipCSS = cva(
  'flex w-fit items-center rounded-2xl border border-primary text-primary',
  {
    variants: {
      variant: {
        small: ' px-2 py-0.5 text-[10px]',
        large: ' px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'small',
    },
  },
);
type ChipProps = VariantProps<typeof ChipCSS> & {
  children: ReactNode;
};
const Chip = ({ variant, children, ...props }: ChipProps) => {
  return (
    <div className={ChipCSS({ variant })} {...props}>
      {children}
    </div>
  );
};

export default Chip;
