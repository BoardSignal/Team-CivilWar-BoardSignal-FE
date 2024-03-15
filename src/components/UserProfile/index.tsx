import { Link } from 'react-router-dom';

import { ParticipantResponse } from '@/apis/gatheringDetail';
import { USERS_PAGE_URL } from '@/constants/pageRoutes';

import Icon from '../Icon';
import UserSignalTemperature from './UserSignalTemperature';

export interface UserProfileProps {
  userProfile: ParticipantResponse;
}

const UserProfile = ({ userProfile }: UserProfileProps) => {
  const {
    nickname,
    profileImageUrl,
    ageGroup,
    signalTemperature,
    isLeader,
    userId,
  } = userProfile;

  return (
    <div className='flex items-center justify-between p-4'>
      <div className='flex gap-2'>
        <Link to={`${USERS_PAGE_URL}/${userId}`}>
          <img
            src={profileImageUrl}
            alt='프로필사진'
            className='size-10 rounded-full object-cover'
          />
        </Link>
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
