import { Link, useLocation } from 'react-router-dom';

import Icon from '../Icon';
import { GNBRoutes } from './routes';

export const GNB = () => {
  const { pathname } = useLocation();

  return (
    <div className='flex select-none gap-4 border-t-[1px] border-gray-200 px-4 pb-2 pt-4'>
      {GNBRoutes.map(({ name, path, icons }) => (
        <Link
          to={path}
          key={path}
          className='flex flex-1 flex-col items-center gap-[2px]'
        >
          <Icon
            id={icons[pathname === path ? 'fill' : 'line']}
            className='h-5 w-5 text-gray-accent1'
          />
          <div className='text-[10px] text-gray-accent1'>{name}</div>
        </Link>
      ))}
    </div>
  );
};
