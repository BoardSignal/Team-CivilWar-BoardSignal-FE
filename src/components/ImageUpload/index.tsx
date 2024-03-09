import { useState } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import ImageUploadButton from './ImageUploadButton';

const imageCSS = cva('z-10 h-32 w-32 bg-white object-cover', {
  variants: {
    variant: {
      circle: 'rounded-full',
      square: 'rounded-lg',
    },
  },
});
const CameraButtonCSS = cva('absolute z-10', {
  variants: {
    variant: {
      circle: 'bottom-1 right-1',
      square: '-bottom-3 -right-3',
    },
  },
});

interface ImageUploadProps extends VariantProps<typeof imageCSS> {
  imageSrcUrl?: string;
  onChange?: (file?: File) => void;
}

const DEFAULT_IMAGE_URL =
  'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';

const ImageUpload = ({
  variant,
  imageSrcUrl = DEFAULT_IMAGE_URL,
  onChange,
}: ImageUploadProps) => {
  const [previewImageUrl, setPreviewImageUrl] = useState(imageSrcUrl);

  return (
    <div className='mb-3 flex w-full justify-center bg-gray-accent7 p-10'>
      <div className='relative'>
        <img
          src={previewImageUrl}
          alt='profile'
          className={imageCSS({ variant })}
        />
        <div className={CameraButtonCSS({ variant })}>
          <ImageUploadButton
            setImageUrl={setPreviewImageUrl}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
export default ImageUpload;
