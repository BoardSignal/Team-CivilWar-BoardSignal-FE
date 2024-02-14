import type { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, http } from 'msw';

import { HomePage } from '@/pages/HomePage';

const meta: Meta<typeof HomePage> = {
  title: 'pages/HomePage',
  tags: ['autodocs'],
  component: HomePage,
  parameters: {
    msw: {
      handlers: [
        http.get('/api/echo', () => HttpResponse.json('hello from server')),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const DefaultTemplate: Story = {};
