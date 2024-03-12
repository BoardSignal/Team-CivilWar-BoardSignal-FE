import type { Meta, StoryObj } from '@storybook/react';

import authMocks from '@/mocks/auth';
import RegisterPage from '@/pages/Register';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof RegisterPage> = {
  title: 'pages/RegisterPage',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...authMocks],
    },
  },
  component: RegisterPage,
};

export default meta;

type Story = StoryObj<typeof RegisterPage>;

export const DefaultTemplate: Story = {};
