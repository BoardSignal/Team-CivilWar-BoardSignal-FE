interface AlertProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}

const Alert = ({ text, backgroundColor, textColor }: AlertProps) => {
  const alertStyle = {
    backgroundColor,
    color: textColor,
  };

  return (
    <div
      className='mx-auto my-4 flex w-full rounded-md px-6 py-4'
      style={alertStyle}
    >
      <label className='font-bold'>안내</label>
      <span className='ml-2'>{text}</span>
    </div>
  );
};

export default Alert;
