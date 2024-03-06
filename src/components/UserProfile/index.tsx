import Icon from '../Icon';
import UserSignalTemperature from './UserSignalTemperature';

interface UserProfileProps {
  nickname: string;
  profileImageUrl?: string;
  ageGroup: string;
  signalTemperature: number;
  isLeader: boolean;
}

const DEFAULT_PROFILE_IMAGE_URL = 'https://picsum.photos/200/200';

const UserProfile = ({
  nickname,
  profileImageUrl = DEFAULT_PROFILE_IMAGE_URL,
  ageGroup,
  signalTemperature,
  isLeader,
}: UserProfileProps) => {
  return (
    <div className='m-2 flex border-b border-gray-accent7 p-2'>
      <img
        src={profileImageUrl}
        alt='프로필사진'
        className='mr-2 size-10 rounded-full object-cover'
      />
      <div className='flex w-full justify-between'>
        <div className='flex flex-col'>
          <span className='flex gap-2 text-[14px] font-bold text-gray-accent1'>
            {nickname}
            {isLeader && (
              <Icon id='vip-crown-fill' className='size-5 text-primary' />
            )}
          </span>

          <span className='text-xs text-gray-accent2'>{ageGroup}</span>
        </div>
        <UserSignalTemperature temperature={signalTemperature} />
      </div>
    </div>
  );
};
export default UserProfile;
