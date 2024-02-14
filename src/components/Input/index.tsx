interface InputProps {
  disabled: boolean;
  label?: string;
  essential: boolean;
  limit?: number | undefined;
  baseData?: string;
  width: 'small' | 'medium' | 'large';
}

const Input = ({
  disabled,
  label,
  essential,
  limit,
  baseData,
  width,
}: InputProps) => {
  const widthType = {
    small: 'w-[100px]',
    medium: 'w-[240px]',
    large: 'w-[358px]',
  };

  return (
    <div className={`flex ${widthType[width]} flex-col`}>
      <div className='mb-2 flex justify-between'>
        <label className='text-gray-accent2'>
          {label}
          {essential && <span className='ml-0.5 text-red-500'>*</span>}
        </label>
        {limit && <label className='text-gray-accent2'>{limit}</label>}
      </div>
      <input
        placeholder={baseData}
        disabled={disabled}
        className={`h-[55px] ${widthType[width]} rounded-lg border-2 border-gray-accent7 text-gray-accent2 ${disabled ? 'bg-gray-accent7' : ''} pl-5`}
      />
    </div>
  );
};

export default Input;
