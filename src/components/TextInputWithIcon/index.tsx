import { ComponentPropsWithoutRef } from 'react';

import Icon from '@/components/Icon';
import { cn } from '@/utils/cn';

import { IconName } from '../Icon/type';

interface TextInputProps extends ComponentPropsWithoutRef<'input'> {
  iconId: IconName;
}

const TextInputWithIcon = ({ iconId, ...props }: TextInputProps) => {
  const { disabled: isDisabled, type } = props;

  return (
    <div className='relative'>
      <Icon id={iconId} className='absolute left-4 top-1/3 text-gray-accent4' />
      <input
        type={type || 'text'}
        className={cn(
          'w-full rounded-lg border border-gray-accent7 p-4 pl-[44px] text-gray-accent2 placeholder-gray-accent4 focus:outline-gray-accent2',
          isDisabled &&
            'cursor-not-allowed bg-gray-accent7 placeholder-gray-accent3',
        )}
        {...props}
      />
    </div>
  );
};

export default TextInputWithIcon;
