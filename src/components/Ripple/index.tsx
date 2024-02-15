import React, { PropsWithChildren, useRef, useState } from 'react';

import RippleEffect from './RippleEffect';

const RIPPLE_DURATION = 500;
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

const Ripple = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [offset, setOffset] = useState(RIPPLE_DEFAULT_OFFSET);

  const showRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) {
      return;
    }

    const element = ref.current;
    const offset = getOffset(e, element);
    setOffset(offset);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, RIPPLE_DURATION);
  };

  return (
    <div className='relative overflow-hidden' ref={ref} onClick={showRipple}>
      {isAnimating && <RippleEffect {...offset} />}
      {children}
    </div>
  );
};

export default Ripple;
