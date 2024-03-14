import { Link } from 'react-router-dom';

import Icon from '@/components/Icon';
import { GATHERINGS_CREATE_PAGE_URL } from '@/constants/pageRoutes';

const FloatingButton = () => {
  return (
    <Link to={GATHERINGS_CREATE_PAGE_URL}>
      <button className='absolute bottom-24 right-5 z-10 flex w-fit rounded-full bg-primary p-3 pl-2 text-white shadow-lg'>
        <Icon id='add-line' size={24} />
        <span className='font-bold'>모집하기</span>
      </button>
    </Link>
  );
};

export default FloatingButton;
