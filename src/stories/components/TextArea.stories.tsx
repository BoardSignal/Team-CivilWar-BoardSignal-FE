import type { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, http } from 'msw';

import Textarea from '@/components/TextArea/index';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  tags: ['autodocs'],
  component: Textarea,
  parameters: {
    msw: {
      handlers: [
        http.get('/api/echo', () => HttpResponse.json('hello from server')),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'label',
    limit: 0,
  },
  //   argTypes: {
  //     size: {
  //       control: 'radio',
  //       options: ['sm', 'lg'],
  //     },
  //     placeholder: {
  //       control: 'text',
  //     },
  //     label: {
  //       control: 'text',
  //     },
  //     limit: {
  //       control: 'number',
  //     },
  //   },
  render: args => {
    return (
      <>
        <Textarea {...args} />
      </>
    );
  },
};
