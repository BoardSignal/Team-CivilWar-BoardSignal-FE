import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  tags: ['autodocs'],
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultGhost: Story = {
  name: '기본 버튼(Ghost)',
  args: {
    children: '회원가입 없이 둘러보기',
  },
};

export const Primary: Story = {
  name: 'Primary 버튼',
  args: {
    children: '리뷰 제출하기',
    variant: 'primary',
  },
};
