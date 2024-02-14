import type { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, http } from 'msw';

import Icon from '@/components/Icon';
import { IconName } from '@/components/Icon/type';

const meta: Meta<typeof Icon> = {
  title: 'components/Icon',
  tags: ['autodocs'],
  component: Icon,
  parameters: {
    msw: {
      handlers: [
        http.get('/api/echo', () => HttpResponse.json('hello from server')),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

const Icons: Array<IconName> = [
  'add-line',
  'arrow-bottom-line',
  'arrow-left-line',
  'bar-chart-line',
  'bar-chart-fill',
  'bookmark-fill',
  'bookmark-line',
  'camera-fill',
  'check-line',
  'dice-line',
  'gamepad-fill',
  'gamepad-line',
  'group-fill',
  'group-line',
  'home-fill',
  'home-line',
  'information-fill',
  'information-line',
  'map-pin-fill',
  'map-pin-line',
  'men-fill',
  'more-line',
  'notification-fill',
  'notification-line',
  'question-answer-fill',
  'question-answer-line',
  'send-plane-fill',
  'send-plane-line',
  'settings-fill',
  'settings-line',
  'share-fill',
  'share-line',
  'team-fill',
  'team-line',
  'thumb-down-fill',
  'thumb-down-line',
  'thumb-up-fill',
  'thumb-up-line',
  'time-fill',
  'time-line',
  'user-fill',
  'user-line',
  'user-forbid-fill',
  'vip-crown-fill',
];

export const DefaultTemplate: Story = {
  args: {
    size: 24,
    id: 'add-line',
  },
  argTypes: {
    size: {
      control: 'range',
      min: 1,
      max: 100,
    },
    id: {
      control: 'radio',
      options: Icons,
    },
  },
};
