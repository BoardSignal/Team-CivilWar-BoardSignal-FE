import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

export interface DrawerContentProps extends ComponentPropsWithoutRef<'div'> {
  __type: 'Drawer.Content';
}

const DrawerContent = ({
  children,
  className,
  ...props
}: PropsWithChildren<DrawerContentProps>) => {
  return (
    <div {...props} className={cn('grow pb-8 text-sm', className)}>
      {children}
    </div>
  );
};

DrawerContent.defaultProps = {
  __type: 'Drawer.Content',
};

export default DrawerContent;
