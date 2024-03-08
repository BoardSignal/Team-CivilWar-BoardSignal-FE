import { cn } from '@/utils/cn';

export interface RippleEffectProps {
  elementWidth: number;
  cursorLeft: number;
  cursorTop: number;
  fast?: boolean;
}

const RippleEffect = ({
  elementWidth,
  cursorLeft,
  cursorTop,
  fast = false,
}: RippleEffectProps) => (
  <div
    className={cn(
      'ripple-effect absolute h-[2px] w-[2px] rounded-full bg-black bg-opacity-20 dark:bg-white',
      fast && 'ripple-fast',
    )}
    style={
      {
        '--ripple-element-width': elementWidth,
        left: `${cursorLeft}px`,
        top: `${cursorTop}px`,
      } as React.CSSProperties
    }
  />
);

export default RippleEffect;
