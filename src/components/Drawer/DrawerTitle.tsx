import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface DrawerTitleProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  __type: 'Drawer.Title';
}

const DrawerTitle = ({ children, ...props }: DrawerTitleProps) => {
  return (
    <div {...props} className='mb-6'>
      {children}
    </div>
  );
};

DrawerTitle.defaultProps = {
  __type: 'Drawer.Title',
};

export default DrawerTitle;
