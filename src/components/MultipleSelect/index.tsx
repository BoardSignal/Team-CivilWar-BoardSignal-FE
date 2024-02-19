import OptionItemButton from './OptionItemButton';

interface MultipleSelectProps {
  optionItems: string[];
  selectedItems: string[];
  onClick: (optionItem: string) => void;
}

const MultipleSelect = ({
  optionItems,
  selectedItems,
  onClick,
}: MultipleSelectProps) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {optionItems.map(optionItem => (
        <OptionItemButton
          key={optionItem}
          active={selectedItems.includes(optionItem)}
          onClick={() => onClick(optionItem)}
        >
          {optionItem}
        </OptionItemButton>
      ))}
    </div>
  );
};

export default MultipleSelect;
