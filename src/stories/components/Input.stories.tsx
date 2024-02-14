import type { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, http } from 'msw';

import Input from '@/components/Input';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  tags: ['autodocs'],
  component: Input,
  parameters: {
    msw: {
      handlers: [
        http.get('/api/echo', () => HttpResponse.json('hello from server')),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const DefaultTemplate: Story = {
  args: {
    disabled: false,
    label: 'label',
    essential: false,
    limit: undefined,
    baseData: '손호민',
    width: 'small',
  },
};
