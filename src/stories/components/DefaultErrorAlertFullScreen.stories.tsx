import type { Meta, StoryObj } from '@storybook/react';

import DefaultErrorAlertFullScreen from '@/components/ErrorAlertFullScreen/DefaultErrorAlertFullScreen';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof DefaultErrorAlertFullScreen> = {
  title: 'components/DefaultErrorAlertFullScreen',
  tags: ['autodocs'],
  component: DefaultErrorAlertFullScreen,
  decorators: [CommonPageLayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof DefaultErrorAlertFullScreen>;

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
