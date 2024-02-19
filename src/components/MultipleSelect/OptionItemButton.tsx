import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/utils/cn';

interface OptionItemButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  active: boolean;
}

const OptionItemButton = ({
  children,
  active,
  ...props
}: OptionItemButtonProps) => {
  return (
    <button
      className={cn(
        'flex w-fit items-center rounded-3xl border px-4 py-2 text-sm text-gray-accent3',
        active && 'border-primary text-primary',
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default OptionItemButton;
