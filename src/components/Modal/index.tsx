import { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import Button from '../Button';
import LayoutRootPortal from '../Layout/LayoutRootPortal';

const modalTitleCSS = cva('mb-4 text-lg font-bold ', {
  variants: {
    variant: {
      primary: 'text-primary',
      danger: 'text-red-500',
    },
  },
});

interface ModalProps extends VariantProps<typeof modalTitleCSS> {
  isOpen: boolean;
  onClose: () => void;
  onDelete?: () => void;
  title: string;
  children: ReactNode;
  buttonChildren: string;
}

const Modal = ({
  isOpen,
  onClose,
  onDelete,
  title,
  variant,
  children,
  buttonChildren,
}: ModalProps) => {
  if (!isOpen) return null;

  const handleDelete = () => {
    onDelete && onDelete();
    onClose();
  };

  return (
    <LayoutRootPortal>
      <div className='inset-0 flex h-full items-center justify-center bg-gray-accent3 bg-opacity-50'>
        <div className='flex w-[66%] flex-col items-center rounded-lg bg-white p-8'>
          <label className={modalTitleCSS({ variant })}>{title}</label>
          <p className='text-m text-gray-accent2'>{children}</p>

          {variant === 'primary' && (
            <Button variant='primary' onClick={onClose} className='mt-8'>
              {buttonChildren}
            </Button>
          )}
          {variant === 'danger' && (
            <>
              <Button variant='danger' onClick={handleDelete} className='mt-8'>
                {buttonChildren}
              </Button>
              <Button variant='outline' onClick={onClose} className='mt-2'>
                취소
              </Button>
            </>
          )}
        </div>
      </div>
    </LayoutRootPortal>
  );
};

export default Modal;
