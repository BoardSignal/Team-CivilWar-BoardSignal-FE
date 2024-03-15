import { BoardGameListItemResponseDTO } from '@/apis/boardGameList';
import Button from '@/components/Button';
import Chip from '@/components/Chip';
import Icon from '@/components/Icon';

type BoardGameListItemProps = {
  boardGame: BoardGameListItemResponseDTO;
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
  return (
    <Button className='flex h-fit justify-start gap-4 rounded-none p-4'>
      <img
        src={imageUrl ?? DEFAULT_BOARD_GAME_IMAGE_URL}
        className='size-[100px] rounded-lg border border-gray-accent7 object-contain'
      />
      <div className='flex flex-col items-start gap-2'>
        <div className='flex flex-col gap-1'>
          <span className='font-bold text-gray-accent1'>{name}</span>
          <div className='flex gap-1'>
            {/* 카테고리가 여러 개 인 경우의 디자인이 없어서 gap: 4px로 지정했어요 */}
            {categories.map(category => (
              <Chip key={category}>{category}</Chip>
            ))}
          </div>
        </div>
        <div className='flex gap-1'>
          <Description title='난이도' value={difficulty} />
          <Description
            title='인원'
            value={[minParticipants, maxParticipants].join('-')}
          />
          <Description
            title='소요시간'
            value={`${[fromPlayTime, toPlayTime].join('-')}분`}
          />
        </div>
        <div className='flex gap-2 py-0.5'>
          <Icon id='bookmark-line' className='size-[14px] text-gray-accent1' />
          <span className='text-xs text-gray-accent2'>{wishCount}</span>
        </div>
      </div>
    </Button>
  );
};

export default BoardGameListItem;
