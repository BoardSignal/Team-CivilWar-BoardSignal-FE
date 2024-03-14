import OptionItemButton from './OptionItemButton';

interface MultipleSelectProps {
  optionItems: string[];
  selectedItems: string[];
  limit?: number;
  onChange: (updatedItems: string[]) => void;
}

const MultipleSelect = ({
  optionItems,
  selectedItems,
  limit = optionItems.length,
  onChange,
}: MultipleSelectProps) => {
  const handleToggleItemButton = (newSelectedItem: string) => {
    if (selectedItems.includes(newSelectedItem)) {
      onChange(
        selectedItems.filter(selectedItem => selectedItem !== newSelectedItem),
      );

      return;
    }

    if (selectedItems.length >= limit) {
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
          onClick={handleToggleItemButton}
        />
      ))}
    </div>
  );
};

export default MultipleSelect;
