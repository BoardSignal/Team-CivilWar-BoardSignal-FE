import { useNavigate, useParams } from 'react-router-dom';

import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';
import { cn } from '@/utils/cn';

interface TabMenuProps {
  tabs: string[];
}

const TabMenu = ({ tabs }: TabMenuProps) => {
  const navigate = useNavigate();
  const { gatheringId, tabIndex } = useParams() as {
    gatheringId: string;
    tabIndex: string;
  };

  return (
    <div className='flex'>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={cn(
            'h-[40px] w-full cursor-pointer border-t pt-2 text-center',
            {
              'border-b-[5px] border-b-primary text-primary':
                tabIndex === String(index),
              'text-gray-accent4': tabIndex !== String(index),
            },
          )}
          onClick={() =>
            navigate(`${GATHERINGS_PAGE_URL}/${gatheringId}/${index}`)
          }
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabMenu;
