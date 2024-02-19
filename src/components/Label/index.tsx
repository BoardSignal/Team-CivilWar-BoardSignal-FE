import { PropsWithChildren } from 'react';

interface LabelProps {
  labelText: string;
  isRequired?: boolean;
  isLimitedText?: boolean;
  textValue?: string;
  textLimited?: number;
  width?: 'small' | 'medium' | 'large';
}

const Label = ({
  labelText,
  isRequired = false,
  textValue,
  textLimited,
  isLimitedText = false,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <div className={`flex flex-col gap-2`}>
      <div className='flex justify-between'>
        <label className='text-sm text-gray-accent2'>
          {labelText}
          {isRequired && <span className='ml-0.5 text-red-500'>*</span>}
        </label>
        {isLimitedText && (
          <span className='text-sm text-gray-accent2'>{`${textValue ? textValue.length : 0}/${textLimited}`}</span>
        )}
      </div>
      {children}
    </div>
  );
};

export default Label;
