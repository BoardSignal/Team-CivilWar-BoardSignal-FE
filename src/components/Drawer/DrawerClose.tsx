import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/utils/cn';

export interface DrawerCloserProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  __type: 'Drawer.Closer';
}

const DrawerCloser = ({ children, className, ...props }: DrawerCloserProps) => {
  return (
    <div {...props} className={cn('h-fit', className)}>
      {children}
    </div>
  );
};

DrawerCloser.defaultProps = {
  __type: 'Drawer.Closer',
};

export default DrawerCloser;
