import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface DrawerTriggerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  __type: 'Drawer.Trigger';
}

const DrawerTrigger = ({ children, ...props }: DrawerTriggerProps) => {
  return (
    <div className='h-fit w-fit' {...props}>
      {children}
    </div>
  );
};

DrawerTrigger.defaultProps = {
  __type: 'Drawer.Trigger',
};

export default DrawerTrigger;
