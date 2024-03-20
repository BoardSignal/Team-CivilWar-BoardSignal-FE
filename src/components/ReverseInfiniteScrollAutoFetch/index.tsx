import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ReverseInfiniteScrollAutoFetchProps
  extends ComponentPropsWithoutRef<'div'> {
  hasNextPage: boolean;
  fetchNextPage: () => void;
  fetchedData: unknown[];
}

const ReverseInfiniteScrollAutoFetch = ({
  children,
  hasNextPage,
  fetchNextPage,
  className,
  fetchedData,
}: ReverseInfiniteScrollAutoFetchProps) => {
  const [previousScrollHeight, setPreviousScrollHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const observeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.scrollTop = previousScrollHeight;
  }, [previousScrollHeight]);

  useEffect(() => {
    if (!containerRef.current || containerRef.current.scrollTop < 0) {
      return;
    }

    containerRef.current.scrollTop = 0;
  }, [fetchedData]);

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting && containerRef.current) {
      setPreviousScrollHeight(containerRef.current.scrollTop);
      fetchNextPage();
    }
  };

  useIntersectionObserver(observeRef, onIntersect, hasNextPage);

  return (
    <div ref={containerRef} className={className}>
      {children}
      <div ref={observeRef}></div>
    </div>
  );
};

export default ReverseInfiniteScrollAutoFetch;
