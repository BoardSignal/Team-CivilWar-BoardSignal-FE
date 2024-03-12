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
  const { name, items, queryStringKey, selectLimit } = option;

  const [searchParams, setSearchParams] = useSearchParams();
  const [newSelectedItems, setNewSelectedItems] = useState([
    ...searchParams.getAll(queryStringKey),
  ]);

  const handleClickCloser = () => {
    searchParams.delete(queryStringKey);
    newSelectedItems.map(item => searchParams.append(queryStringKey, item));
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (searchParams.toString()) return;

    setNewSelectedItems([...searchParams.getAll(queryStringKey)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <Drawer
      onClose={() =>
        setNewSelectedItems([...searchParams.getAll(queryStringKey)])
      }
    >
      <Drawer.Trigger>
        <OptionFilterButton option={option} />
      </Drawer.Trigger>
      <Drawer.Title>{name}</Drawer.Title>
      <Drawer.Content className='flex flex-col'>
        <MultipleSelect
          optionItems={items}
          selectedItems={newSelectedItems}
          limit={selectLimit}
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
