import { useState } from 'react';

import { useReviewCreateApi } from '@/apis/reviewCreate';
import Button from '@/components/Button';
import UserProfile from '@/components/UserProfile';

import ReviewSelect from '../ReviewSelect';

export type OnReviewCreate = (userId: number) => void;

export interface ParticipantsInfos {
  userId: number;
  nickname: string;
  ageGroup: string;
  profileImageUrl?: string;
  isLeader: boolean;
  signalTemperature: number;
}

interface ReviewFormProps {
  participantsInfos: ParticipantsInfos[];
  onReviewCreate: OnReviewCreate;
  userId: number;
}

const ReviewForm = ({
  participantsInfos,
  onReviewCreate,
  userId,
}: ReviewFormProps) => {
  const [reviewList, setReviewList] = useState(() => {
    return participantsInfos.map(participant => ({
      revieweeId: participant.userId,
      reviewContent: [
        { content: '시간을 잘 지켜요', reviewScore: '선택 안 함' },
        { content: '친절하고 매너가 좋아요', reviewScore: '선택 안 함' },
        { content: '응답이 빨라요', reviewScore: '선택 안 함' },
      ],
    }));
  });

  const createReviewMutation = useReviewCreateApi();

  const updateReviewScore = (
    revieweeId: number,
    index: number,
    score: string,
  ) => {
    setReviewList(prevReviewList => {
      return prevReviewList.map(reviewee => {
        if (reviewee.revieweeId === revieweeId) {
          return {
            ...reviewee,
            reviewContent: reviewee.reviewContent.map((content, i) =>
              i === index ? { ...content, reviewScore: score } : content,
            ),
          };
        }
        return reviewee;
      });
    });
  };

  const handleSubmit = async () => {
    try {
      const reviewRequests = reviewList.map(reviewee => ({
        revieweeId: reviewee.revieweeId,
        reviewContent: reviewee.reviewContent,
      }));

      await createReviewMutation({ reviews: reviewRequests });
      onReviewCreate(userId);
      console.log('리뷰가 성공적으로 제출되었습니다.');
    } catch (error) {
      console.error('리뷰 제출 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div className='flex h-full flex-col overflow-hidden'>
      <div className='flex-grow overflow-y-auto'>
        {reviewList.map(reviewee => {
          const userProfile = participantsInfos.find(
            info => info.userId === reviewee.revieweeId,
          );

          return (
            <div
              key={reviewee.revieweeId}
              className='flex grow flex-col overflow-hidden'
            >
              <div className='bt-gray-accent7 grow gap-2 overflow-y-auto border-t pb-2'>
                {userProfile && <UserProfile userProfile={userProfile} />}

                <ReviewSelect
                  userId={reviewee.revieweeId}
                  reviews={reviewee.reviewContent}
                  onChange={(index, score) =>
                    updateReviewScore(reviewee.revieweeId, index, score)
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex flex-col gap-1 p-4'>
        <Button variant='primary' onClick={handleSubmit}>
          리뷰 제출하기
        </Button>
        <Button variant='outline'>취소하기</Button>
      </div>
    </div>
  );
};

export default ReviewForm;
