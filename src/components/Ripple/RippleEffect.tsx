export interface RippleEffectProps {
  elementWidth: number;
  cursorLeft: number;
  cursorTop: number;
}

const RippleEffect = ({
  elementWidth,
  cursorLeft,
  cursorTop,
}: RippleEffectProps) => (
  <div
    className='ripple-effect absolute h-[2px] w-[2px] rounded-full bg-black bg-opacity-20'
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
