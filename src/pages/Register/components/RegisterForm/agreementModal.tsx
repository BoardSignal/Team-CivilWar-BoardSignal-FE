import { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import Button from '@/components/Button';
import LayoutRootPortal from '@/components/Layout/LayoutRootPortal';

const modalTitleCSS = cva('mb-4 mt-4 text-lg font-bold', {
  variants: {
    variant: {
      agreeTerms: 'text-primary',
      agreeMarketing: 'text-primary',
    },
  },
});

interface ModalProps extends VariantProps<typeof modalTitleCSS> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  buttonChildren: string;
}

const AgreementModal = ({
  isOpen,
  onClose,
  title,
  variant,
  children,
  buttonChildren,
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <LayoutRootPortal>
      <div className='absolute inset-0 z-[100] flex h-full items-center justify-center'>
        <div className='flex h-full w-full flex-col items-center rounded-lg bg-gray-bg-base p-4'>
          <label className={modalTitleCSS({ variant })}>{title}</label>
          <div className='h-[50%] w-full grow overflow-y-auto whitespace-pre-wrap text-sm text-gray-accent2'>
            {children}
          </div>
          {variant === 'agreeTerms' && (
            <Button variant='primary' onClick={onClose} className='mt-8'>
              {buttonChildren}
            </Button>
          )}
          {variant === 'agreeMarketing' && (
            <Button variant='primary' onClick={onClose} className='mt-8'>
              {buttonChildren}
            </Button>
          )}
        </div>
      </div>
    </LayoutRootPortal>
  );
};

export default AgreementModal;
