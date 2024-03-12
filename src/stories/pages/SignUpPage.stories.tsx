import type { Meta, StoryObj } from '@storybook/react';

import authMocks from '@/mocks/auth';
import SignUpPage from '@/pages/SignUp';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof SignUpPage> = {
  title: 'pages/SignUpPage',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...authMocks],
    },
  },
  component: SignUpPage,
};

export default meta;

type Story = StoryObj<typeof SignUpPage>;

export const DefaultTemplate: Story = {};
