import UserSignalTemperature from './UserSignalTemperature';

interface UserProfileProps {
  nickname: string;
  profileImageUrl?: string;
  ageGroup: string;
  signalTemperature: number;
}

const DEFAULT_PROFILE_IMAGE_URL = 'https://picsum.photos/200/200';

const UserProfile = ({
  nickname,
  profileImageUrl = DEFAULT_PROFILE_IMAGE_URL,
  ageGroup,
  signalTemperature,
}: UserProfileProps) => {
  return (
    <div className='flex'>
      <img
        src={profileImageUrl}
        alt='프로필사진'
        className='mr-2 h-10 w-10 rounded-full object-cover'
      />
      <div className='flex w-full justify-between'>
        <div className='flex flex-col'>
          <span className='text-[14px] font-bold text-gray-accent1'>
            {nickname}
          </span>
          <span className='text-xs text-gray-accent2'>{ageGroup}</span>
        </div>
        <UserSignalTemperature value={signalTemperature} />
      </div>
    </div>
  );
};
export default UserProfile;
