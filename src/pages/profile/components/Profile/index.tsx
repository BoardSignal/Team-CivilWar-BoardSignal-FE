import Icon from '@/components/Icon';

interface ProfileProps {
  nickname: string;
  signal: number;
  gender: string;
  ageGroup: string;
  profileImageUrl: string;
}
const Profile = ({
  nickname,
  signal,
  gender,
  ageGroup,
  profileImageUrl,
}: ProfileProps) => {
  return (
    <div className='flex flex-col items-center gap-2 px-4'>
      <img
        src={profileImageUrl}
        alt='아바타 이미지'
        className='h-[150px] w-[150px] rounded-full'
      />
      <div className='flex flex-col items-center gap-1'>
        <span className='font-bold text-gray-accent1'>{nickname}</span>
        <span className='text-gray-accent2'>{`${ageGroup} ${gender}`}</span>
        <div className='flex gap-1'>
          <Icon
            id='dice-line'
            size={20}
            className='fill-white text-profile-accent1'
          />
          <span className='text-profile'>Signal</span>
          <span className='text-gray-accent1'>{signal}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
