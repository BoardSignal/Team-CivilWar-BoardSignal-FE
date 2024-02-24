import { Link, useSearchParams } from 'react-router-dom';

import Icon from '@/components/Icon';

import Button from '../Button';
import OptionDrawer from './OptionDrawer';
import OptionFilterButton from './OptionFilterButton';

interface Icon {
  fill: string;
  line: string;
}
export interface Option {
  name: string;
  icons: Icon;
  items: string[];
  queryKey: string;
}

interface OptionFilterBarProps {
  options: Option[];
}

const OptionFilterBar = ({ options }: OptionFilterBarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleToggleButton = (queryKey: string, optionItem: string) => {
    searchParams.get(queryKey)
      ? searchParams.delete(queryKey)
      : searchParams.set(queryKey, optionItem);

    setSearchParams(searchParams);
  };

  return (
    <section className='scroll-none flex items-center overflow-x-auto whitespace-nowrap border-y border-gray-accent7 px-4 py-2'>
      <div className='flex w-max items-center gap-2'>
        <Link to='/'>
          <Button className='flex h-fit w-fit rounded-full bg-gray-accent7 p-2'>
            <Icon id='close-line' size={16} className='text-gray-accent2' />
          </Button>
        </Link>
        {options.map(option =>
          option.items.length === 1 ? (
            <div key={option.name}>
              <OptionFilterButton
                option={option}
                onClick={() =>
                  handleToggleButton(option.queryKey, option.items[0])
                }
              />
            </div>
          ) : (
            <OptionDrawer key={option.name} option={option} />
          ),
        )}
      </div>
    </section>
  );
};

export default OptionFilterBar;
