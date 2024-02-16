import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import { GNB } from '@/components/GNB';

const meta: Meta<typeof GNB> = {
  title: 'components/GNB',
  tags: ['autodocs'],
  component: GNB,
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '*',
      },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof GNB>;

export const DefaultTemplate: Story = {};
