import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/utils/cn';

export interface DrawerContentProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  __type: 'Drawer.Content';
}

const DrawerContent = ({
  children,
  className,
  ...props
}: DrawerContentProps) => {
  return (
    <div {...props} className={cn('grow text-sm', className)}>
      {children}
    </div>
  );
};

DrawerContent.defaultProps = {
  __type: 'Drawer.Content',
};

export default DrawerContent;
