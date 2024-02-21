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
  return (
    <div className='flex flex-col items-center gap-2 px-4'>
      <img
        src={profileImageUrl}
        alt='아바타 이미지'
        className='h-[150px] w-[150px] rounded-full object-cover'
      />
      <div className='flex flex-col items-center gap-1'>
        <span className='text-lg font-bold text-gray-accent1'>{nickname}</span>
        <span className='text-sm text-gray-accent2'>{`${ageGroup} ${gender}`}</span>
        <div className='flex gap-1'>
          <Icon id='dice-line' className='text-indigo-500' />
          <span className='text-sm font-bold text-indigo-500'>Signal</span>
          <span className='text-sm font-bold text-gray-accent1'>{signal}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
