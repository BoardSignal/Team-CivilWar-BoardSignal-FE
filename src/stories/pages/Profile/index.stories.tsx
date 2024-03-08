import type { Meta, StoryObj } from '@storybook/react';

import Profile from '@/pages/Profile';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof Profile> = {
  title: 'pages/Profile/page',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  component: Profile,
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const DefaultTemplate: Story = {};
