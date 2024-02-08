import { Link, useLocation } from 'react-router-dom';

import { GNBRoutes } from './routes';

export const GNB = () => {
  const { pathname } = useLocation();

  return (
    <div className='flex gap-4 border-t-[1px] border-gray-200 px-4 pb-2 pt-4'>
      {GNBRoutes.map(({ name, path, icons }) => (
        <Link
          to={path}
          key={path}
          className='flex flex-1 flex-col items-center gap-[2px]'
        >
          <img
            src={icons[pathname === path ? 'fill' : 'line']}
            className='h-5 w-5 text-[#333]'
          />
          <div className='text-[10px] text-[#333]'>{name}</div>
        </Link>
      ))}
    </div>
  );
};
