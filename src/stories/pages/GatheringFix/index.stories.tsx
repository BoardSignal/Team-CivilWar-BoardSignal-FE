import type { Meta, StoryObj } from '@storybook/react';

import GatheringFixPage from '@/pages/GatheringFix';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof GatheringFixPage> = {
  title: 'pages/GatheringFix/page',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  component: GatheringFixPage,
};

export default meta;

type Story = StoryObj<typeof GatheringFixPage>;

export const DefaultTemplate: Story = {};
