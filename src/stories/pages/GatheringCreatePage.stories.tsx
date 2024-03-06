import type { Meta, StoryObj } from '@storybook/react';

import authMocks from '@/mocks/auth';
import GatheringCreatePage from '@/pages/GatheringCreate';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof GatheringCreatePage> = {
  title: 'pages/GatheringCreatePage',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...authMocks],
    },
  },
  component: GatheringCreatePage,
};

export default meta;

type Story = StoryObj<typeof GatheringCreatePage>;

export const DefaultTemplate: Story = {};
