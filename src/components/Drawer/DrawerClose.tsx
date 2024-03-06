import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

export interface DrawerCloserProps extends ComponentPropsWithoutRef<'div'> {
  __type: 'Drawer.Closer';
}

const DrawerCloser = ({
  children,
  className,
  ...props
}: PropsWithChildren<DrawerCloserProps>) => {
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
