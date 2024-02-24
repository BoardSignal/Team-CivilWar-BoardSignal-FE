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
  const handleClickButton = (newSelectedItem: string) => {
    if (selectedItems.includes(newSelectedItem)) {
      onChange(
        selectedItems.filter(selectedItem => selectedItem !== newSelectedItem),
      );

      return;
    }

    onChange([...selectedItems, newSelectedItem]);
  };

  return (
    <div className='flex select-none flex-wrap gap-2'>
      {optionItems.map(optionItem => (
        <OptionItemButton
          key={optionItem}
          optionItem={optionItem}
          active={selectedItems.includes(optionItem)}
          onClick={handleClickButton}
        />
      ))}
    </div>
  );
};

export default MultipleSelect;
