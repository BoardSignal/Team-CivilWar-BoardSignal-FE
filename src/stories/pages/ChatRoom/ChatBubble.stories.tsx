import type { Meta, StoryObj } from '@storybook/react';

import authMocks from '@/mocks/auth';
import ChatBubble from '@/pages/ChatRoom/components/ChatBubble';

const meta: Meta<typeof ChatBubble> = {
  title: 'pages/ChatRoom/ChatBubble',
  tags: ['autodocs'],
  component: ChatBubble,
  parameters: {
    msw: {
      handlers: [...authMocks],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChatBubble>;

const DUMMY_CHAT = {
  userId: 2,
  nickname: 'hannah',
  userImageUrl: null,
  content: '안녕하세요! 진짜 해본적이 없는데도 괜찮을까요?',
  type: 'CHAT',
  createdAt: '2024-03-14T13:04:21.075',
  isChecked: false,
};

export const DefaultTemplate: Story = {
  args: {
    message: DUMMY_CHAT,
  },
};
