import { HttpResponse, http } from 'msw';

import { API_BASE_URL, ROOMS_CHATS_API_URL } from '@/constants/apiRoutes';

export const MOCK_GET_CHAT_ROOM_MESSAGES_URL = `${API_BASE_URL}${ROOMS_CHATS_API_URL}/1`;

export const mockGetChatRoomMessagesHandler = async () => {
  return HttpResponse.json({
    chatList: [
      {
        userId: 4,
        nickname: 'hannah',
        userImageUrl: null,
        content: '아뇨',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-16T01:30:16.325',
      },
      {
        userId: 1,
        nickname: '손호민',
        userImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        content: '게임 해보셨나요',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-16T01:21:17.146',
      },
      {
        userId: 1,
        nickname: '손호민',
        userImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        content: '안녕하세요',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-16T01:20:18.091',
      },
      {
        userId: 4,
        nickname: 'hannah',
        userImageUrl: null,
        content: '안녕하세요~',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-16T01:16:24.389',
      },
      {
        userId: 4,
        nickname: 'hannah',
        userImageUrl: null,
        content: '아뇨',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-15T01:30:16.325',
      },
      {
        userId: 1,
        nickname: '손호민',
        userImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        content: '게임 해보셨나요',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-15T01:21:17.146',
      },
      {
        userId: 1,
        nickname: '손호민',
        userImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        content: '안녕하세요',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-15T01:20:18.091',
      },
      {
        userId: 4,
        nickname: 'hannah',
        userImageUrl: null,
        content: '안녕하세요~',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-15T01:16:24.389',
      },
      {
        userId: 4,
        nickname: 'hannah',
        userImageUrl: null,
        content: '아뇨',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-14T01:30:16.325',
      },
      {
        userId: 1,
        nickname: '손호민',
        userImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        content: '게임 해보셨나요',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-14T01:21:17.146',
      },
      {
        userId: 1,
        nickname: '손호민',
        userImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        content: '안녕하세요',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-14T01:20:18.091',
      },
      {
        userId: 4,
        nickname: 'hannah',
        userImageUrl: null,
        content: '안녕하세요~',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-14T01:16:24.389',
      },
      {
        userId: 4,
        nickname: 'hannah',
        userImageUrl: null,
        content: '아뇨',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-13T01:30:16.325',
      },
      {
        userId: 1,
        nickname: '손호민',
        userImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        content: '게임 해보셨나요',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-13T01:21:17.146',
      },
      {
        userId: 1,
        nickname: '손호민',
        userImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        content: '안녕하세요',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-13T01:20:18.091',
      },
      {
        userId: 4,
        nickname: 'hannah',
        userImageUrl: null,
        content: '안녕하세요~',
        type: 'CHAT',
        isChecked: true,
        createdAt: '2024-03-13T01:16:24.389',
      },
    ],
    currentPageNumber: 0,
    size: 10,
    hasNext: false,
  });
};

const chatRoomMessagesMocks = [
  http.get(MOCK_GET_CHAT_ROOM_MESSAGES_URL, mockGetChatRoomMessagesHandler),
];

export default chatRoomMessagesMocks;
