import type { Meta, StoryObj } from '@storybook/react';

import ErrorAlertFullScreen from '@/components/ErrorAlertFullScreen';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof ErrorAlertFullScreen> = {
  title: 'components/ErrorAlertFullScreen',
  tags: ['autodocs'],
  component: ErrorAlertFullScreen,
  decorators: [CommonPageLayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof ErrorAlertFullScreen>;

export const Default: Story = {
  name: '기본',
};

export const NoIcon: Story = {
  name: '아이콘 제외',
  args: {
    isShowingErrorIcon: false,
  },
};

export const CustomTexts: Story = {
  name: '텍스트 커스터마이징',
  args: {
    title: '커스텀 제목',
    message: '커스텀 설명',
    buttonText: '커스텀 버튼 제목',
  },
};
