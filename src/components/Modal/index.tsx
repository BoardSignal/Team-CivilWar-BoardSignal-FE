import { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

const modalTitleCSS = cva('mb-4 text-lg font-bold ', {
  variants: {
    variant: {
      primary: 'text-primary',
      cancel: 'text-red-500',
    },
  },
});
const modalButtonCSS = cva(
  'mt-8 flex w-full items-center justify-center rounded-md py-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary  text-white',
        cancel: 'border border-red-500 text-red-500',
      },
    },
  },
);

interface ModalProps extends VariantProps<typeof modalTitleCSS> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  children?: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  message,
  variant,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='absolute inset-0 flex items-center justify-center bg-gray-accent3 bg-opacity-50'>
      <div className='flex w-96 flex-col items-center rounded-lg bg-white p-8'>
        <label className={modalTitleCSS({ variant })}>{title}</label>
        <p className='text-m text-gray-accent2'>{message}</p>
        <button onClick={onClose} className={modalButtonCSS({ variant })}>
          {children}
        </button>
        {variant === 'cancel' && (
          <button
            onClick={onClose}
            className='mt-2 w-full rounded-md border border-gray-accent5 py-2 text-gray-accent3'
          >
            취소
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
