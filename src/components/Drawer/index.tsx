import {
  Children,
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useMemo,
  useState,
} from 'react';

import { cn } from '@/utils/cn';

import LayoutRootPortal from '../Layout/LayoutRootPortal';
import DrawerCloser, { DrawerCloserProps } from './DrawerClose';
import DrawerContent, { DrawerContentProps } from './DrawerContent';
import DrawerTitle, { DrawerTitleProps } from './DrawerTitle';
import DrawerTrigger, { DrawerTriggerProps } from './DrawerTrigger';

interface DrawerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  onClose?: () => void;
}

const childrenToArray = (children: ReactNode, types: string | string[]) => {
  return Children.toArray(children).filter(
    element => isValidElement(element) && types.includes(element.props.__type),
  );
};

const Drawer = ({ children, onClose }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseDrawer = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const [drawerTrigger, drawerTitle, drawerContent, drawerCloser] =
    useMemo(() => {
      return (
        childrenToArray(children, [
          'Drawer.Trigger',
          'Drawer.Title',
          'Drawer.Content',
          'Drawer.Closer',
        ]) as ReactElement<
          | DrawerTriggerProps
          | DrawerTitleProps
          | DrawerContentProps
          | DrawerCloserProps
        >[]
      ).map((element, index) => {
        if (element.props.__type === 'Drawer.Trigger') {
          return cloneElement(element, {
            ...element.props,
            key: index,
            onClick: () => setIsOpen(true),
          });
        }

        if (element.props.__type === 'Drawer.Closer') {
          return cloneElement(element, {
            ...element.props,
            key: index,
            onClick: handleCloseDrawer,
          });
        }

        return element;
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);

  return (
    <>
      {drawerTrigger}
      <LayoutRootPortal>
        <div
          className={cn(
            'absolute left-0 top-0 z-20 h-full w-full overflow-y-hidden',
            isOpen ? 'animate-fadeIn' : 'hidden animate-fadeOut',
          )}
        >
          <div
            onClick={handleCloseDrawer}
            className={cn(
              'h-full w-full bg-gray-accent1',
              isOpen ? 'animate-opacity70' : 'animate-opacity0',
            )}
          ></div>
          <div
            className={cn(
              'absolute flex min-h-64 w-full flex-col rounded-t-lg bg-white p-6',
              isOpen ? 'animate-moveUp' : 'animate-moveDown',
            )}
          >
            {drawerTitle}
            {drawerContent}
            {drawerCloser}
          </div>
        </div>
      </LayoutRootPortal>
    </>
  );
};

Drawer.Trigger = DrawerTrigger;
Drawer.Title = DrawerTitle;
Drawer.Content = DrawerContent;
Drawer.Closer = DrawerCloser;

export default Drawer;
