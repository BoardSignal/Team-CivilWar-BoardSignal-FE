import { useState } from 'react';

import ImageUploadButton from './ImageUploadButton';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
  );

  return (
    <div className='relative mb-3 flex w-full justify-center overflow-hidden bg-gray-accent7 p-10'>
      <img
        src={imageUrl}
        alt='profile'
        className='z-10 h-32 w-32 rounded-full bg-white object-cover'
      />
      <div className='absolute bottom-10 right-40 z-10'>
        <ImageUploadButton setImageUrl={setImageUrl} />
      </div>
    </div>
  );
};
export default ImageUpload;
