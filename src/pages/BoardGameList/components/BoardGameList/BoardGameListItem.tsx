import { Link } from 'react-router-dom';

import { BoardGameListItemResponse } from '@/apis/boardGameList';
import Button from '@/components/Button';
import Chip from '@/components/Chip';
import Icon from '@/components/Icon';
import { BOARD_GAMES_PAGE_URL } from '@/constants/pageRoutes';

type BoardGameListItemProps = {
  boardGame: BoardGameListItemResponse;
};

interface DescriptionProps {
  title: string;
  value: string;
}

const Description = ({ title, value }: DescriptionProps) => (
  <div className='flex gap-0.5'>
    <span className='text-xs font-bold text-gray-accent1'>{title}</span>
    <span className='text-xs text-gray-accent2'>{value}</span>
  </div>
);

const DEFAULT_BOARD_GAME_IMAGE_URL = 'https://picsum.photos/200/300';

const BoardGameListItem = ({
  boardGame: {
    boardGameId,
    name,
    categories,
    difficulty,
    minParticipants,
    maxParticipants,
    fromPlayTime,
    toPlayTime,
    wishCount,
    imageUrl,
  },
}: BoardGameListItemProps) => {
  const participantsText =
    minParticipants === maxParticipants
      ? minParticipants.toString()
      : [minParticipants, maxParticipants].join('-');

  const playTimeText =
    fromPlayTime === toPlayTime
      ? fromPlayTime.toString()
      : `${[fromPlayTime, toPlayTime].join('-')}분`;

  return (
    <Link to={`${BOARD_GAMES_PAGE_URL}/${boardGameId}`}>
      <Button className='flex h-fit justify-start gap-4 rounded-none border-b border-gray-accent7 p-4'>
        <img
          src={imageUrl ?? DEFAULT_BOARD_GAME_IMAGE_URL}
          className='size-[100px] rounded-lg border border-gray-accent7 object-contain'
        />
        <div className='flex flex-col items-start gap-2'>
          <div className='flex flex-col items-start gap-1'>
            <span className='line-clamp-1 font-bold text-gray-accent1'>
              {name}
            </span>
            <div className='flex gap-1'>
              {categories.map(category => (
                <Chip key={category}>{category}</Chip>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex gap-1'>
              <Description title='인원' value={participantsText} />
              <Description title='소요시간' value={playTimeText} />
            </div>
            <Description title='난이도' value={difficulty} />
          </div>
          <div className='flex items-center gap-2 py-0.5'>
            <Icon
              id='bookmark-line'
              className='size-[14px] text-gray-accent1'
            />
            <span className='text-xs text-gray-accent2'>{wishCount}</span>
          </div>
        </div>
      </Button>
    </Link>
  );
};

export default BoardGameListItem;
