import type { Meta, StoryObj } from '@storybook/react';

import TextInput from '@/components/TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'components/TextInput',
  tags: ['autodocs'],
  component: TextInput,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const DefaultTemplate: Story = {
  args: {
    isDisabled: false,
    label: 'label',
    isRequired: false,
    helperText: undefined,
    placeholder: '손호민',
    width: 'small',
  },
};
