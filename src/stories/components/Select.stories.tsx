import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Select from '@/components/Select';

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  tags: ['autodocs'],
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const DefaultTemplate = (args: Story) => {
  const OPTIONS = ['평일 오전', '평일 오후', '주말 오전', '주말 오후'];
  const PLACEHOLDER_TEXT = '시간대 선택';

  const [selectValue, setSelectValue] = useState(PLACEHOLDER_TEXT);

  return (
    <Select
      {...args}
      options={OPTIONS}
      placeholder={PLACEHOLDER_TEXT}
      value={selectValue}
      onChange={setSelectValue}
    />
  );
};
