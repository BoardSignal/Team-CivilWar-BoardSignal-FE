import {
  Children,
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { cn } from '@/utils/cn';

import DrawerContent, { DrawerContentProps } from './DrawerContent';
import DrawerTitle, { DrawerTitleProps } from './DrawerTitle';
import DrawerTrigger, { DrawerTriggerProps } from './DrawerTrigger';

interface DrawerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

const childrenToArray = (children: ReactNode, types: string | string[]) => {
  return Children.toArray(children).filter(
    element => isValidElement(element) && types.includes(element.props.__type),
  );
};

const Drawer = ({ children }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [drawerTrigger, drawerTitle, drawerContent] = useMemo(() => {
    return (
      childrenToArray(children, [
        'Drawer.Trigger',
        'Drawer.Title',
        'Drawer.Content',
      ]) as ReactElement<
        DrawerTriggerProps | DrawerTitleProps | DrawerContentProps
      >[]
    ).map((element, index) => {
      if (element.props.__type === 'Drawer.Trigger') {
        return cloneElement(element, {
          ...element.props,
          key: index,
          onClick: () => setIsOpen(true),
        });
      }

      return element;
    });
  }, [children]);

  const backdropRef = useRef<HTMLDivElement>(null);

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const drawer = backdropRef.current;
    drawer?.addEventListener('click', handleCloseDrawer);

    return () => drawer?.removeEventListener('click', handleCloseDrawer);
  }, []);

  return (
    <>
      {drawerTrigger}
      <div
        className={cn(
          'absolute left-0 top-0 z-20 h-screen w-full min-w-[350px] max-w-[450px] overflow-y-hidden',
          isOpen ? 'animate-fadeIn' : 'hidden animate-fadeOut',
        )}
      >
        <div
          ref={backdropRef}
          className={cn(
            'h-full w-full bg-gray-accent1',
            isOpen ? 'animate-opacity70' : 'animate-opacity0',
          )}
        ></div>
        <div
          className={cn(
            'absolute min-h-64 w-full rounded-t-lg bg-white p-6',
            isOpen ? 'animate-moveUp' : 'animate-moveDown',
          )}
        >
          {drawerTitle}
          {drawerContent}
        </div>
      </div>
    </>
  );
};

Drawer.Trigger = DrawerTrigger;
Drawer.Title = DrawerTitle;
Drawer.Content = DrawerContent;

export default Drawer;
