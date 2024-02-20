import ReviewContent from './ReviewContent';

interface Review {
  score: number;
  content: string;
}
interface ReviewProps {
  reviews: Review[];
}
const Review = ({ reviews }: ReviewProps) => {
  return (
    <div>
      <span className='font-bold'>매너 리뷰</span>
      <div className='py-1'>
        {reviews.map(review => {
          const { score, content } = review;

          return <ReviewContent reviewNumber={score} reviewTitle={content} />;
        })}
      </div>
    </div>
  );
};

export default Review;
