import type { Meta, StoryObj } from '@storybook/react';

import TabBar from '@/components/TabBar';

const meta: Meta<typeof TabBar.Container> = {
  title: 'common/TabBar',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='max-w-[390px] border border-gray-accent6 '>
        <Story />
      </div>
    ),
  ],
  component: TabBar.Container,
};

export default meta;

type Story = StoryObj<typeof TabBar.Container>;

export const Profile: Story = {
  name: '프로필 탭바',
  args: {
    children: (
      <>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <TabBar.Title>프로필</TabBar.Title>
        </TabBar.Left>
      </>
    ),
  },
};

export const GatheringDetail: Story = {
  name: '모임 소개 탭바',
  args: {
    children: (
      <>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
        <TabBar.Right>
          <TabBar.ChatButton />
          <TabBar.ShareButton />
        </TabBar.Right>
      </>
    ),
  },
};

export const BoardGameList: Story = {
  name: '보드게임 목록 탭바',
  args: {
    children: (
      <>
        <TabBar.Left>
          <TabBar.Title>게임 찾기</TabBar.Title>
        </TabBar.Left>
      </>
    ),
  },
};
