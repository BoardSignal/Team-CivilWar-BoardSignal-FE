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
  icon: string;
  items: string[];
  queryStringKey: string;
}

interface OptionFilterBarProps {
  options: Option[];
}

const OptionFilterBar = ({ options }: OptionFilterBarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleToggleButton = (queryStringKey: string, optionItem: string) => {
    searchParams.get(queryStringKey)
      ? searchParams.delete(queryStringKey)
      : searchParams.set(queryStringKey, optionItem);

    setSearchParams(searchParams);
  };

  return (
    <section className='scroll-none flex shrink-0 items-center overflow-x-auto whitespace-nowrap border-b border-gray-accent7 px-4 py-2'>
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
                  handleToggleButton(option.queryStringKey, option.items[0])
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
