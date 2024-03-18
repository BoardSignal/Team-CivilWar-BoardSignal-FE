import { useState } from 'react';

import { useReviewCreateApi } from '@/apis/reviewCreate';
import Button from '@/components/Button';
import UserProfile from '@/components/UserProfile';
import { showErrorToast } from '@/utils/showToast';

import ReviewSelect from '../ReviewSelect';

export type OnReviewCreate = (gatheringId: string) => void;

export interface ParticipantsInfos {
  userId: number;
  nickname: string;
  ageGroup: string;
  profileImageUrl: string | null;
  isLeader: boolean;
  signalTemperature: number;
}

interface ReviewFormProps {
  participantsInfos: ParticipantsInfos[];
  onReviewCreate: OnReviewCreate;
  gatheringId: string;
}

const defaultReviewContent = [
  { content: '시간 약속을 잘 지켜요', reviewScore: '선택 안 함' },
  { content: '친절하고 매너가 좋아요', reviewScore: '선택 안 함' },
  { content: '응답이 빨라요', reviewScore: '선택 안 함' },
];
const ReviewForm = ({
  participantsInfos,
  onReviewCreate,
  gatheringId,
}: ReviewFormProps) => {
  const [reviewList, setReviewList] = useState(
    participantsInfos.map(participant => ({
      revieweeId: participant.userId,
      reviewContent: [...defaultReviewContent],
    })),
  );

  const createReviewMutation = useReviewCreateApi();

  const updateReviewScore = (
    revieweeId: number,
    contentIndex: number,
    score: string,
  ) => {
    const updatedReviewList = reviewList.map(reviewee => {
      if (reviewee.revieweeId === revieweeId) {
        return {
          ...reviewee,
          reviewContent: reviewee.reviewContent.map((content, index) => {
            if (index === contentIndex) {
              return { ...content, reviewScore: score };
            }
            return content;
          }),
        };
      }
      return reviewee;
    });

    setReviewList(updatedReviewList);
  };

  const handleSubmit = async () => {
    const reviewRequests = reviewList;
    const { isOk, isBadRequest, data } = await createReviewMutation({
      reviews: reviewRequests,
      gatheringId,
    });
    if (isOk) {
      onReviewCreate(gatheringId);
    }

    if (isBadRequest) {
      showErrorToast(data.message);
    }
  };

  return (
    <div className='flex h-full flex-col overflow-hidden'>
      <div className='flex-grow overflow-y-auto'>
        {reviewList.map(({ revieweeId, reviewContent }) => {
          const userProfile = participantsInfos.find(
            info => info.userId === revieweeId,
          );

          return (
            <div
              key={revieweeId}
              className='flex grow flex-col overflow-hidden'
            >
              <div className='bt-gray-accent7 grow gap-2 overflow-y-auto border-t pb-2'>
                {userProfile && (
                  <UserProfile
                    userProfile={{
                      ...userProfile,
                      signalTemperature: userProfile.signalTemperature,
                    }}
                  />
                )}

                <ReviewSelect
                  userId={revieweeId}
                  reviews={reviewContent}
                  onChange={(index, score) =>
                    updateReviewScore(revieweeId, index, score)
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
