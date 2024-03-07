import type { Review } from '@/apis/userProfile';
import Icon from '@/components/Icon';

interface ReviewProps {
  reviews: Review[];
}

interface ReviewContentProps {
  review: Review;
}

const MannerReview = ({ reviews }: ReviewProps) => {
  return (
    <div className='flex flex-col'>
      <span className='py-2 font-bold'>매너 리뷰</span>
      <div className='flex flex-col gap-2 px-1'>
        {reviews.map(review => (
          <ReviewContent review={review} key={review.content} />
        ))}
      </div>
    </div>
  );
};

const ReviewContent = ({ review }: ReviewContentProps) => {
  const { content, score } = review;

  return (
    <div className='flex'>
      <div className='flex w-[60px] items-center gap-2'>
        <Icon id='group-line' />
        <span className='text-gray-accent1'>{score}</span>
      </div>
      <div className='rounded-tl-0 flex items-center rounded-bl-lg rounded-br-lg rounded-tr-lg bg-gray-accent7 p-2'>
        <span className='text-gray-accent1'>{content}</span>
      </div>
    </div>
  );
};

export default MannerReview;
