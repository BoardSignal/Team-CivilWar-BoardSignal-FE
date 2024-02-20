import { useRef } from 'react';

import Icon from '../Icon';

interface Props {
  setImageUrl: (imageUrl: string) => void;
}

const ImageUploadButton = ({ setImageUrl }: Props) => {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleImageSelect = () => {
    console.log(inputElement.current);
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
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  return (
    <div>
      <label htmlFor='imageUploadButton'>
        <div className='h-[35px] w-[35px] cursor-pointer rounded-full border border-gray-200 bg-white fill-gray-400 p-1.5'>
          <Icon id='camera-fill' />
        </div>
      </label>
      <input
        id='imageUploadButton'
        className='file-input file-input-bordered hidden w-full max-w-xs'
        type='file'
        accept='image/*'
        onChange={handleImageSelect}
        ref={inputElement}
      />
    </div>
  );
};

export default ImageUploadButton;
