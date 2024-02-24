import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/utils/cn';

export interface DrawerTitleProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  __type: 'Drawer.Title';
}

const DrawerTitle = ({ children, className, ...props }: DrawerTitleProps) => {
  return (
    <div {...props} className={cn('mb-6 h-fit', className)}>
      {children}
    </div>
  );
};

DrawerTitle.defaultProps = {
  __type: 'Drawer.Title',
};

export default DrawerTitle;
