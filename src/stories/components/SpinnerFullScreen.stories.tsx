import type { Meta, StoryObj } from '@storybook/react';

import SpinnerFullScreen from '@/components/Spinner/SpinnerFullScreen';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof SpinnerFullScreen> = {
  title: 'components/SpinnerFullScreen',
  tags: ['autodocs'],
  component: SpinnerFullScreen,
  decorators: [CommonPageLayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof SpinnerFullScreen>;

export const Default: Story = {};
