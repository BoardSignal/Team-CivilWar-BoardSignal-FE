import { useState } from 'react';

import OptionItemButton from './OptionItemButton';

interface MultipleSelectProps {
  optionItems: string[];
  selectedItems: string[];
  onChange: (updatedItems: string[]) => void;
}

const MultipleSelect = ({
  optionItems,
  selectedItems,
  onChange,
}: MultipleSelectProps) => {
  const [newSelectedItems, setNewSelectedItems] = useState([...selectedItems]);

  const handleClickButton = (selectedItem: string) => {
    if (newSelectedItems.includes(selectedItem)) {
      setNewSelectedItems(
        newSelectedItems.filter(
          newSelectedItem => newSelectedItem !== selectedItem,
        ),
      );
    } else {
      setNewSelectedItems([...newSelectedItems, selectedItem]);
    }

    onChange && onChange(newSelectedItems);
  };

  return (
    <div className='flex select-none flex-wrap gap-2'>
      {optionItems.map(optionItem => (
        <OptionItemButton
          key={optionItem}
          optionItem={optionItem}
          active={newSelectedItems.includes(optionItem)}
          onClick={handleClickButton}
        />
      ))}
    </div>
  );
};

export default MultipleSelect;
