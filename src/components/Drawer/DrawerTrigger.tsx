import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

export interface DrawerTriggerProps extends ComponentPropsWithoutRef<'div'> {
  __type: 'Drawer.Trigger';
}

const DrawerTrigger = ({
  children,
  ...props
}: PropsWithChildren<DrawerTriggerProps>) => {
  return <div {...props}>{children}</div>;
};

DrawerTrigger.defaultProps = {
  __type: 'Drawer.Trigger',
};

export default DrawerTrigger;
