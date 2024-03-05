import Icon from '@/components/Icon';
import { IconName } from '@/components/Icon/type';

interface GatheringGuide {
  startTime: string;
  place: string;
  minParticipants: number;
  maxParticipants: number;
  categories: string[];
  isAllowedAppositeGender: string;
  minAge: number;
  maxAge: number;
}

interface GatheringGuideProps {
  gatheringGuide: GatheringGuide;
}

interface GuideItemProps {
  iconId: IconName;
  label: string;
  content: string;
}

const GuideItem = ({ iconId, label, content }: GuideItemProps) => (
  <div className='mt-3 flex'>
    <Icon id={iconId} size={13}></Icon>
    <span className='ml-1 w-20 text-[10px] font-bold'>{label}</span>
    <span className='text-[12px]'>{content}</span>
  </div>
);

const GatheringGuide = ({ gatheringGuide }: GatheringGuideProps) => {
  const {
    startTime,
    place,
    minParticipants,
    maxParticipants,
    categories,
    isAllowedAppositeGender,
    maxAge,
    minAge,
  } = gatheringGuide;

  const ageGroup = `${minAge} ~ ${maxAge}세`;
  const participantsGroup = `${minParticipants} ~ ${maxParticipants}명`;
  const gender = isAllowedAppositeGender ? '혼성' : '동성';

  return (
    <div className='h-[240px] w-full rounded-lg bg-gray-accent7 p-5'>
      <span className='font-bold'>모임 조건 안내</span>
      <GuideItem iconId='time-fill' label='시간대' content={startTime} />
      <GuideItem iconId='map-pin-fill' label='장소' content={place} />
      <GuideItem iconId='team-fill' label='인원' content={participantsGroup} />
      <GuideItem iconId='user-fill' label='나이대' content={ageGroup} />
      <GuideItem
        iconId='gamepad-fill'
        label='게임 카테고리'
        content={categories.join(' · ')}
      />
      <GuideItem iconId='men-fill' label='성별' content={gender} />
    </div>
  );
};

export default GatheringGuide;
