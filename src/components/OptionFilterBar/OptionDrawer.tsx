import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import type { Option } from '.';
import Button from '../Button';
import Drawer from '../Drawer';
import MultipleSelect from '../MultipleSelect';
import OptionFilterButton from './OptionFilterButton';

interface OptionDrawerProps {
  option: Option;
}

const OptionDrawer = ({ option }: OptionDrawerProps) => {
  const { name, items, queryKey } = option;

  const [searchParams, setSearchParams] = useSearchParams();
  const [newSelectedItems, setNewSelectedItems] = useState([
    ...searchParams.getAll(queryKey),
  ]);

  const handleClickCloser = () => {
    searchParams.delete(queryKey);
    newSelectedItems.map(item => searchParams.append(queryKey, item));
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (searchParams.toString()) return;

    setNewSelectedItems([...searchParams.getAll(queryKey)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <Drawer
      onClose={() => setNewSelectedItems([...searchParams.getAll(queryKey)])}
    >
      <Drawer.Trigger>
        <OptionFilterButton option={option} />
      </Drawer.Trigger>
      <Drawer.Title>{name}</Drawer.Title>
      <Drawer.Content className='flex flex-col'>
        <MultipleSelect
          optionItems={items}
          selectedItems={newSelectedItems}
          onChange={updatedItems => {
            setNewSelectedItems([...updatedItems]);
          }}
        />
      </Drawer.Content>
      <Drawer.Closer>
        <Button variant='primary' onClick={handleClickCloser}>
          확인
        </Button>
      </Drawer.Closer>
    </Drawer>
  );
};

export default OptionDrawer;
