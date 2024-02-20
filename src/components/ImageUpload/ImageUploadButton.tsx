import { useRef } from 'react';

import Icon from '../Icon';

interface Props {
  setImageUrl: (imageUrl: string) => void;
  onChange?: (file: File) => void;
}

const ImageUploadButton = ({ setImageUrl, onChange }: Props) => {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleImageSelect = () => {
    if (!inputElement.current) {
      return;
    }
    if (!inputElement.current.files) {
      return;
    }
    const [file] = inputElement.current.files;
    if (!file) {
      return;
    }
    if (onChange) {
      onChange(file);
    }

    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  return (
    <div>
      <label htmlFor='imageUploadButton'>
        <div className='h-[35px] w-[35px] cursor-pointer rounded-full border border-gray-accent5 bg-white fill-gray-accent5 p-1.5'>
          <Icon id='camera-fill' />
        </div>
      </label>
      <input
        id='imageUploadButton'
        className='hidden w-full max-w-xs'
        type='file'
        accept='image/*'
        onChange={handleImageSelect}
        ref={inputElement}
      />
    </div>
  );
};

export default ImageUploadButton;
