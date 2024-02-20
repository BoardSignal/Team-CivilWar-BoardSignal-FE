import { useState } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

import ImageUploadButton from './ImageUploadButton';

const ImageCSS = cva('z-10 h-32 w-32 bg-white object-cover', {
  variants: {
    variant: {
      circle: 'rounded-full',
      square: 'rounded-lg',
    },
  },
});

interface ImageUploadProps extends VariantProps<typeof ImageCSS> {}
const DefaltImage =
  'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';

const ImageUpload = ({ variant }: ImageUploadProps) => {
  const [imageUrl, setImageUrl] = useState(DefaltImage);

  return (
    <div className='relative mb-3 flex w-full justify-center overflow-hidden bg-gray-accent7 p-10'>
      <div className='relative'>
        <img src={imageUrl} alt='profile' className={ImageCSS({ variant })} />
        <div
          className={cn(
            'absolute bottom-1 right-1 z-10',
            variant === 'square' && '-bottom-3 -right-3',
          )}
        >
          <ImageUploadButton setImageUrl={setImageUrl} />
        </div>
      </div>
    </div>
  );
};
export default ImageUpload;
