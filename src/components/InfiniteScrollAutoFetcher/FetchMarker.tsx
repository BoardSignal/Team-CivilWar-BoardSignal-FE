import { forwardRef } from 'react';

interface FetchMarkerProps {
  y: number;
}

const FetchMarker = forwardRef<HTMLDivElement, FetchMarkerProps>(
  ({ y }, ref) => (
    <div ref={ref} className='absolute' style={{ bottom: y, left: 0 }} />
  ),
);

export default FetchMarker;
