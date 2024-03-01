import type { Meta, StoryObj } from '@storybook/react';

import MyProfile from '@/pages/MyProfile';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof MyProfile> = {
  title: 'pages/MyProfile/page',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  component: MyProfile,
};

export default meta;

type Story = StoryObj<typeof MyProfile>;

export const DefaultTemplate: Story = {};
