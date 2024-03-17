import type { Meta, StoryObj } from '@storybook/react';

import authMocks from '@/mocks/auth';
import endGameListMocks from '@/mocks/endgames';
import EndGamesPage from '@/pages/EndGames';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof EndGamesPage> = {
  title: 'pages/EndGamesPage',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...authMocks, ...endGameListMocks],
    },
  },
  component: EndGamesPage,
};

export default meta;

type Story = StoryObj<typeof EndGamesPage>;

export const DefaultTemplate: Story = {};
