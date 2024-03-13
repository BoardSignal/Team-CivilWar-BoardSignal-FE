import type { Meta, StoryObj } from '@storybook/react';

import authMocks from '@/mocks/auth';
import ProfileEdit from '@/pages/ProfileEdit';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof ProfileEdit> = {
  title: 'pages/ProfileEdit',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...authMocks],
    },
  },
  component: ProfileEdit,
};

export default meta;

type Story = StoryObj<typeof ProfileEdit>;

export const DefaultTemplate: Story = {};
