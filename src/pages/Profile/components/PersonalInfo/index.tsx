import defaultProfileImage from '@/assets/default-profile-image.png';
import Icon from '@/components/Icon';

interface PersonalInfo {
  nickname: string;
  signal: number;
  gender: string;
  ageGroup: string;
  profileImageUrl: string | null;
}

interface PersonalInfoProps {
  personalInfo: PersonalInfo;
}

const PersonalInfo = ({ personalInfo }: PersonalInfoProps) => {
  const {
    nickname,
    signal: signalCount,
    gender,
    ageGroup,
    profileImageUrl,
  } = personalInfo;
  const userProfileImageUrl = profileImageUrl ?? defaultProfileImage;

  return (
    <div className='flex flex-col items-center gap-2 py-4'>
      <img
        src={userProfileImageUrl}
        alt='아바타 이미지'
        className='h-[150px] w-[150px] rounded-full object-cover'
      />
      <div className='flex flex-col items-center gap-1'>
        <span className='text-lg font-bold text-gray-accent1'>{nickname}</span>
        <span className='text-sm text-gray-accent2'>{`${ageGroup} ${gender}`}</span>
        <div className='flex h-fit w-fit gap-1'>
          <Icon id='dice-line' className='text-indigo-500' />
          <span className='text-sm font-bold text-indigo-500'>Signal</span>
          <span className='cursor-default text-sm font-bold text-gray-accent1'>
            {signalCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
