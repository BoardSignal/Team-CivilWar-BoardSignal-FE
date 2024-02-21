import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import {
  Anchor,
  Content,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-popover';

import { cn } from '@/utils/cn';

const Popover = Root;

const PopoverTrigger = Trigger;

const PopoverAnchor = Anchor;

const PopoverContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-[180px] rounded-md border bg-gray-accent1 p-3 text-xs text-white shadow-md outline-none',
        className,
      )}
      {...props}
    />
  </Portal>
));
PopoverContent.displayName = Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
