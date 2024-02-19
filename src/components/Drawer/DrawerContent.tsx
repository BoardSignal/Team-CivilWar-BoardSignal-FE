import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface DrawerContentProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  __type: 'Drawer.Content';
}

const DrawerContent = ({ children, ...props }: DrawerContentProps) => {
  return (
    <div {...props} className='text-sm'>
      {children}
    </div>
  );
};

DrawerContent.defaultProps = {
  __type: 'Drawer.Content',
};

export default DrawerContent;
