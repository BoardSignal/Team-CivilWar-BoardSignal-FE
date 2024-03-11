import type { Meta, StoryObj } from '@storybook/react';

import OptionFilterBar from '@/components/OptionFilterBar';
import { OPTIONS } from '@/constants/options';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof OptionFilterBar> = {
  title: 'components/OptionFilterBar',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  component: OptionFilterBar,
};

export default meta;

type Story = StoryObj<typeof OptionFilterBar>;

export const DefaultTemplate: Story = {
  args: {
    options: OPTIONS,
  },
};
