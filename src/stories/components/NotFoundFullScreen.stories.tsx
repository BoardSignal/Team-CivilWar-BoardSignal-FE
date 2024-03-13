import type { Meta, StoryObj } from '@storybook/react';

import NotFoundErrorAlertFullScreen from '@/components/ErrorAlertFullScreen/NotFoundErorAlertFullScreen';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof NotFoundErrorAlertFullScreen> = {
  title: 'components/NotFoundErrorAlertFullScreen',
  tags: ['autodocs'],
  component: NotFoundErrorAlertFullScreen,
  decorators: [CommonPageLayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof NotFoundErrorAlertFullScreen>;

export const Default: Story = {
  name: '기본',
};
