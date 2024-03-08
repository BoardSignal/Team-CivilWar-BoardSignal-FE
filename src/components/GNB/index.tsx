import { Link, useLocation } from 'react-router-dom';

import Button from '../Button';
import Icon from '../Icon';
import { GNBRoutes } from './routes';

export const GNB = () => {
  const { pathname } = useLocation();

  return (
    <div className='flex select-none border-t border-gray-accent7'>
      {GNBRoutes.map(({ name, path, icons }) => (
        <Link to={path} key={path} className='flex-1'>
          <Button className='flex h-fit flex-col items-center gap-0.5 pb-2 pt-4'>
            <Icon
              id={icons[pathname === path ? 'fill' : 'line']}
              className='text-gray-accent1'
            />
            <div className='text-[10px] text-gray-accent1'>{name}</div>
          </Button>
        </Link>
      ))}
    </div>
  );
};
