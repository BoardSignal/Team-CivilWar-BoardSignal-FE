import type { Meta, StoryObj } from '@storybook/react';

import DefaultErrorAlertFullScreen from '@/components/ErrorAlertFullScreen/DefaultErrorAlertFullScreen';
import {
  DEFAULT_ERROR_MESSAGE,
  DEFAULT_ERROR_TITLE,
} from '@/constants/messages/error';

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
  args: {
    isShowingErrorIcon: true,
    title: DEFAULT_ERROR_TITLE,
    message: DEFAULT_ERROR_MESSAGE,
    buttonIconId: 'refresh-line',
    buttonText: '새로 고침하기',
  },
};

export const NoIcon: Story = {
  name: '아이콘 제외',
  args: {
    isShowingErrorIcon: false,
    title: DEFAULT_ERROR_TITLE,
    message: DEFAULT_ERROR_MESSAGE,
    buttonIconId: 'refresh-line',
    buttonText: '새로 고침하기',
  },
};

export const CustomTexts: Story = {
  name: '텍스트 커스터마이징',
  args: {
    isShowingErrorIcon: true,
    title: '커스텀 제목',
    message: '커스텀 설명',
    buttonIconId: 'bar-chart-line',
    buttonText: '커스텀 버튼 제목',
  },
};
