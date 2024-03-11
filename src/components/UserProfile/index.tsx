import Icon from '../Icon';
import UserSignalTemperature from './UserSignalTemperature';

interface UserProfileProps {
  userProfile: {
    nickname: string;
    profileImageUrl?: string;
    ageGroup: string;
    signalTemperature: number;
    isLeader: boolean;
  };
}

const UserProfile = ({ userProfile }: UserProfileProps) => {
  const { nickname, profileImageUrl, ageGroup, signalTemperature, isLeader } =
    userProfile;

  return (
    <div className='flex items-center justify-between p-4'>
      <div className='flex gap-2'>
        <img
          src={profileImageUrl}
          alt='프로필사진'
          className='size-10 rounded-full object-cover'
        />
        <div className='flex flex-col'>
          <span className='flex gap-2 text-sm font-bold text-gray-accent1'>
            {nickname}
            {isLeader && (
              <Icon id='vip-crown-fill' size={20} className='text-primary' />
            )}
          </span>
          <span className='text-xs text-gray-accent2'>{ageGroup}</span>
        </div>
      </div>
      <UserSignalTemperature temperature={signalTemperature} />
    </div>
  );
};

export default UserProfile;
