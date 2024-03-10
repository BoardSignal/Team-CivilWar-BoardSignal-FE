import { useState } from 'react';

import Icon from '@/components/Icon';

interface ReviewProps {
  reviewScore: string;
  content: string;
  onChange: (score: string) => void;
}

interface ReviewSelectProps {
  reviews: ReviewProps[];
  onChange: (index: number, score: string) => void;
}

const Review = ({ reviewScore, content, onChange }: ReviewProps) => {
  const [selected, setSelected] = useState(reviewScore);

  const handleClick = (score: string) => {
    const newScore = selected === score ? '선택 안 함' : score;
    setSelected(newScore);
    onChange(newScore);
  };

  return (
    <div className='flex justify-between'>
      <div
        className={`rounded-tl-0 ml-2 flex items-center rounded-bl-lg rounded-br-lg rounded-tr-lg bg-gray-accent7 p-2`}
      >
        <span className='text-gray-accent1'>{content}</span>
      </div>
      <div className='flex gap-2'>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full p-2 ${selected === '싫어요' ? 'bg-red-500' : 'bg-gray-accent5'}`}
        >
          <Icon
            id='thumb-down-fill'
            onClick={() => handleClick('싫어요')}
            className={`text-lg ${selected === '싫어요' ? 'text-red-100' : 'text-gray-accent3'}`}
          />
        </div>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full p-2 ${selected === '좋아요' ? 'bg-green-500' : 'bg-gray-accent5'}`}
        >
          <Icon
            id='thumb-up-fill'
            onClick={() => handleClick('좋아요')}
            className={`text-xl ${selected === '좋아요' ? 'text-green-100' : 'text-gray-accent3'}`}
          />
        </div>
      </div>
    </div>
  );
};

const ReviewSelect = ({ reviews, onChange }: ReviewSelectProps) => {
  const handleReviewChange = (index: number, score: string) => {
    onChange(index, score);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-2 px-1'>
        {reviews &&
          reviews.map(({ reviewScore, content }, index) => (
            <Review
              content={content}
              reviewScore={reviewScore}
              onChange={score => handleReviewChange(index, score)}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default ReviewSelect;
