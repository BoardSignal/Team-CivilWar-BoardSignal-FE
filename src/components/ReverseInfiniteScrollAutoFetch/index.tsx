import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ReverseInfiniteScrollAutoFetchProps
  extends ComponentPropsWithoutRef<'div'> {
  hasNextPage: boolean;
  fetchNextPage: () => void;
  data: unknown[];
}

const ReverseInfiniteScrollAutoFetch = ({
  children,
  hasNextPage,
  fetchNextPage,
  className,
  data,
}: ReverseInfiniteScrollAutoFetchProps) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const observeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const scrollTop = containerRef.current.scrollHeight - scrollHeight;

    containerRef.current.scrollTop = scrollTop;
    setScrollHeight(containerRef.current.scrollHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length]);

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  };

  useIntersectionObserver(observeRef, onIntersect, hasNextPage);

  return (
    <div ref={containerRef} className={className}>
      <div ref={observeRef}></div>
      {children}
    </div>
  );
};

export default ReverseInfiniteScrollAutoFetch;
