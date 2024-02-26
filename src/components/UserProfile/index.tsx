import UserSignalTemperature from './UserSignalTemperature';

interface UserProfileProps {
  nickname: string;
  profileImageUrl: string;
  ageGroup: string;
  value: number;
}

const UserProfile = ({
  nickname,
  profileImageUrl,
  ageGroup,
  value,
}: UserProfileProps) => {
  const DEFAULT_PROFILE_IMAGE_URL = 'https://picsum.photos/200/200';

  return (
    <div className='flex'>
      <img
        src={profileImageUrl || DEFAULT_PROFILE_IMAGE_URL}
        className='h-10 w-10 rounded-full object-cover'
        style={{ marginRight: '0.5rem' }}
      />
      <div className='flex w-full justify-between'>
        <div className='flex flex-col'>
          <span className='font-bold text-gray-accent1'>{nickname}</span>
          <span className='text-xs text-gray-accent2'>{ageGroup}</span>
        </div>
        <UserSignalTemperature value={value} />
      </div>
    </div>
  );
};
export default UserProfile;
