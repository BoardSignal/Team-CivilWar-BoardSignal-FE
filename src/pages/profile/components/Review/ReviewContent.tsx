import Icon from '@/components/Icon';

interface ReviewContentProps {
  reviewNumber: number;
  reviewTitle: string;
}
const ReviewContent = ({ reviewNumber, reviewTitle }: ReviewContentProps) => {
  return (
    <div className='mb-2 flex h-10'>
      <div className='flex w-[60px] items-center gap-2'>
        <Icon id='group-line' size={17.5}></Icon>
        <span className='text-gray-accent1'>{reviewNumber}</span>
      </div>
      <div className='rounded-tl-0 flex items-center rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] bg-gray-accent7 px-2.5'>
        <span className='text-gray-accent1'>{reviewTitle}</span>
      </div>
    </div>
  );
};

export default ReviewContent;
