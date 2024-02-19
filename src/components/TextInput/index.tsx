import { cn } from '@/utils/cn';

interface TextInputProps {
  isDisabled?: boolean;
  label?: string;
  isRequired?: boolean;
  helperText?: number | undefined;
  placeholder?: string;
  width: 'small' | 'medium' | 'large';
}

const TextInput = ({
  isDisabled = false,
  label,
  isRequired = false,
  helperText,
  placeholder,
  width,
}: TextInputProps) => {
  const widthType = {
    small: 'w-[100px]',
    medium: 'w-[240px]',
    large: 'w-[358px]',
  };

  return (
    <div className={`flex ${widthType[width]} flex-col gap-2`}>
      <div className='flex justify-between'>
        <label className='text-gray-accent2'>
          {label}
          {isRequired && <span className='ml-0.5 text-red-500'>*</span>}
        </label>
        {helperText && (
          <label className='text-gray-accent2'>{helperText}</label>
        )}
      </div>
      <input
        placeholder={placeholder}
        disabled={isDisabled}
        className={cn(
          `w-full rounded-lg border border-gray-accent7 p-4 
          text-gray-accent2 focus:outline-gray-accent2`,
          isDisabled && 'bg-gray-accent7',
        )}
      />
    </div>
  );
};

export default TextInput;
