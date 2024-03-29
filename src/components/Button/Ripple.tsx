import { ComponentProps, MouseEvent, useRef, useState } from 'react';

import { cn } from '@/utils/cn';

import RippleEffect from './RippleEffect';

const RIPPLE_DURATION = {
  FAST: 300,
  NORMAL: 500,
};

const RIPPLE_DEFAULT_OFFSET = {
  elementWidth: 0,
  cursorLeft: 0,
  cursorTop: 0,
};

const getOffset = (e: MouseEvent<HTMLButtonElement>, el: HTMLButtonElement) => {
  const { left, top } = el.getBoundingClientRect();

  return {
    elementWidth: el.offsetWidth,
    cursorLeft: e.clientX - left,
    cursorTop: e.clientY - top,
  };
};

export interface RippleProps extends ComponentProps<'button'> {
  fast?: boolean;
}

/**
 * Ripple 트랜지션을 렌더링하는 컨테이너 컴포넌트에요.
 *
 * fast={true}로 설정하면 빠른 Ripple 효과를 렌더링할 수 있어요.
 */
const Ripple = ({
  fast,
  className,
  onClick,
  children,
  ...props
}: RippleProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [offset, setOffset] = useState(RIPPLE_DEFAULT_OFFSET);

  const showRipple = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) {
      return;
    }

    const element = ref.current;
    const offset = getOffset(e, element);

    setOffset(offset);
    setIsAnimating(true);

    setTimeout(
      () => {
        setIsAnimating(false);
      },
      fast ? RIPPLE_DURATION.FAST : RIPPLE_DURATION.NORMAL,
    );
  };

  return (
    <button
      className={cn('relative overflow-hidden', className)}
      ref={ref}
      onMouseDown={showRipple}
      onClick={onClick}
      {...props}
    >
      {isAnimating && <RippleEffect {...offset} />}
      {children}
    </button>
  );
};

export default Ripple;
