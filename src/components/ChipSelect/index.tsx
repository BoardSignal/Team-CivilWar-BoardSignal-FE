import ChipButton from './ChipButton';

interface ChipSelectProps {
  optionItems: string[];
  selectedItems: string[];
  limit?: number;
  onChange: (updatedItems: string[]) => void;
}

/**
 * 최대 선택 가능 개수를 limit으로 설정할 수 있습니다.
 *
 * limit이 1인 경우 단일 선택으로, 1보다 큰 경우 다중 선택으로 동작합니다.
 */

const ChipSelect = ({
  optionItems,
  selectedItems,
  limit = optionItems.length,
  onChange,
}: ChipSelectProps) => {
  const handleToggleItemButton = (newSelectedItem: string) => {
    if (selectedItems.includes(newSelectedItem)) {
      onChange(
        selectedItems.filter(selectedItem => selectedItem !== newSelectedItem),
      );

      return;
    }

    if (limit === 1) {
      onChange([newSelectedItem]);

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
        <ChipButton
          key={optionItem}
          optionItem={optionItem}
          active={selectedItems.includes(optionItem)}
          onClick={handleToggleItemButton}
        />
      ))}
    </div>
  );
};

export default ChipSelect;
