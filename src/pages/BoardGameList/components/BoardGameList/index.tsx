import { useGetBoardGameListApi } from '@/apis/boardGameList';

import { useBoardGameListQueryParams } from '../../hooks/useBoardGameListQueryParams';
import BoardGameListItem from './BoardGameListItem';

const BoardGameList = () => {
  const options = useBoardGameListQueryParams();
  const data = useGetBoardGameListApi(options);

  // TODO: EmptyListFullScreen 추가하기

  return (
    <div className='grow overflow-y-auto'>
      <ul>
        {data.map(boardGame => (
          <li key={boardGame.boardGameId}>
            <BoardGameListItem boardGame={boardGame} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardGameList;
