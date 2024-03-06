import React, { ComponentProps, useRef, useState } from 'react';

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

const getOffset = (e: React.MouseEvent<HTMLDivElement>, el: HTMLDivElement) => {
  const { left, top } = el.getBoundingClientRect();

  return {
    elementWidth: el.offsetWidth,
    cursorLeft: e.clientX - left,
    cursorTop: e.clientY - top,
  };
};

export interface RippleProps extends ComponentProps<'div'> {
  fast?: boolean;
}

/**
 * Ripple 트랜지션을 렌더링하는 컨테이너 컴포넌트에요.
 *
 * div로 구현되기 때문에 일부 스타일을 Ripple에 적용해야 할 수 있어요.
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
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [offset, setOffset] = useState(RIPPLE_DEFAULT_OFFSET);

  const showRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) {
      return;
    }

    if (onClick) {
      onClick(e);
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
    <div
      className={cn('relative overflow-hidden', className)}
      ref={ref}
      onClick={showRipple}
      {...props}
    >
      {isAnimating && <RippleEffect {...offset} />}
      {children}
    </div>
  );
};

export default Ripple;
