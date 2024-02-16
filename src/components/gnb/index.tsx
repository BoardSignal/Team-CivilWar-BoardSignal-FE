import { Link, useLocation } from 'react-router-dom';

import Icon from '../Icon';
import Ripple from '../Ripple';
import { GNBRoutes } from './routes';

export const GNB = () => {
  const { pathname } = useLocation();

  return (
    <div className='flex select-none border-t border-gray-200'>
      {GNBRoutes.map(({ name, path, icons }) => (
        <Link to={path} key={path} className='flex-1'>
          <Ripple fast>
            <div className='flex flex-col items-center gap-[2px] pt-4'>
              <Icon
                id={icons[pathname === path ? 'fill' : 'line']}
                className='h-5 w-5 text-gray-accent1'
              />
              <div className='px-2 pb-2 text-[10px] text-gray-accent1'>
                {name}
              </div>
            </div>
          </Ripple>
        </Link>
      ))}
    </div>
  );
};
