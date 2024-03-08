/* eslint prefer-arrow-callback: 0 */
import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { cn } from '@/utils/cn';

import Spinner from '../Spinner';
import FetchMarker from './FetchMarker';

const calculateBottomY = (element: HTMLElement, ratio: number) => {
  const { height } = element.getBoundingClientRect();

  return Math.floor(height * ratio);
};

interface InfiniteScrollAutoFetcherProps
  extends ComponentPropsWithoutRef<'div'> {
  fetchStatus: 'fetching' | 'paused' | 'idle';
  hasNextPage: boolean;
  fetchNextPage: () => void;
  bottomYRatio?: number;
  loaderElement?: ReactNode;
}

/**
 * 스크롤 시 해당 요소의 일정 비율의 높이에 도달하면 fetchNextPage를 호출해요.
 *
 * `bottomYRatio`로 높이를 지정할 수 있어요. (e.g. `0.3 = 아래에서 30% 높이일 때`)
 *
 * React-query의 useInfiniteQuery와 함께 쓰면 가장 편해요.
 */
const InfiniteScrollAutoFetcher = ({
  fetchStatus,
  hasNextPage,
  fetchNextPage,
  children,
  className,
  bottomYRatio = 0.3,
  loaderElement = <Spinner />,
  ...props
}: InfiniteScrollAutoFetcherProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const [markerY, setMarkerY] = useState(0);

  useEffect(
    function createObserverOnMount() {
      const markerElement = markerRef.current;
      if (!markerElement) {
        return;
      }

      const markerObserver = new IntersectionObserver(entries => {
        if (entries[0]?.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      markerObserver.observe(markerElement);
    },
    [hasNextPage, fetchNextPage],
  );

  useEffect(
    function moveMarkerToBottomOnFetch() {
      const containerElement = containerRef.current;

      // fetching->idle 로 바뀔 때만 Y를 갱신해야 돼요.
      if (!containerElement || fetchStatus === 'fetching') {
        return;
      }

      const bottomY = calculateBottomY(containerElement, bottomYRatio);
      setMarkerY(bottomY);
    },
    [fetchStatus, bottomYRatio],
  );

  return (
    <div ref={containerRef} className={cn(className, 'relative')} {...props}>
      {children}
      <FetchMarker ref={markerRef} y={markerY} />
      {fetchStatus === 'fetching' && loaderElement}
    </div>
  );
};

export default InfiniteScrollAutoFetcher;
