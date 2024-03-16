import { getRelativeTimeWithin } from '@/utils/time';

interface GatheringDescriptionProps {
  title: string;
  description: string;
  createdAt: string;
}
const convertLimitDate = 14;
const GatheringDescription = ({
  title,
  createdAt,
  description,
}: GatheringDescriptionProps) => {
  return (
    <div className='flex flex-col'>
      <span className='text-xl font-bold'>{title}</span>
      <span className='mb-4 mt-1 text-[10px] text-gray-accent3 underline'>
        {getRelativeTimeWithin(createdAt, convertLimitDate)}
      </span>
      <p className='whitespace-normal text-sm text-gray-accent2'>
        {description}
      </p>
    </div>
  );
};

export default GatheringDescription;
