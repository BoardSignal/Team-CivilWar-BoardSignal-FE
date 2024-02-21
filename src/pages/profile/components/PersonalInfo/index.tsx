import { useNavigate } from 'react-router-dom';

import Icon from '@/components/Icon';

interface PersonalInfoProps {
  nickname: string;
  signal: number;
  gender: string;
  ageGroup: string;
  profileImageUrl: string;
}

const PersonalInfo = ({
  nickname,
  signal,
  gender,
  ageGroup,
  profileImageUrl,
}: PersonalInfoProps) => {
  const DEFAULT_PROFILE_IMAGE_URL = 'https://picsum.photos/200/200';
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center gap-2 px-4'>
      <img
        src={profileImageUrl || DEFAULT_PROFILE_IMAGE_URL}
        alt='아바타 이미지'
        className='h-[150px] w-[150px] rounded-full object-cover'
      />
      <div className='flex flex-col items-center gap-1'>
        <span className='text-lg font-bold text-gray-accent1'>{nickname}</span>
        <span className='text-sm text-gray-accent2'>{`${ageGroup} ${gender}`}</span>
        <div
          className='flex cursor-pointer gap-1'
          onClick={() => navigate('end-game')}
        >
          <Icon id='dice-line' className='text-indigo-500' />
          <span className='text-sm font-bold text-indigo-500'>Signal</span>
          <span className='cursor-default text-sm font-bold text-gray-accent1'>
            {signal}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
