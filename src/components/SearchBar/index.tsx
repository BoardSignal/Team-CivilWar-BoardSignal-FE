import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { cn } from '@/utils/cn';

import Icon from '../Icon';

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar = ({ placeholder = '' }: SearchBarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStringKey = 'searchKeyword';
  const [keyword, setKeyword] = useState(
    searchParams.get(queryStringKey) || '',
  );

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleClickRemoveIcon = () => {
    setKeyword('');
    searchParams.delete(queryStringKey);
    setSearchParams(searchParams);
  };

  const handleSetSearchKeyword = () => {
    if (!keyword) {
      return;
    }

    searchParams.set(queryStringKey, keyword);
    setSearchParams(searchParams);
  };

  const handlePressEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSetSearchKeyword();
    }
  };

  return (
    <div className='flex items-center gap-2'>
      <div className='relative flex w-full items-center'>
        <input
          placeholder={placeholder}
          value={keyword}
          onChange={handleChangeKeyword}
          onKeyUp={handlePressEnterKey}
          className='w-full rounded-full bg-gray-accent7 px-4 py-2 text-sm text-gray-accent1 outline-none'
        />
        <Icon
          id='close-line'
          className={cn(
            'absolute right-2 hidden cursor-pointer text-gray-accent4',
            keyword && 'block',
          )}
          onClick={handleClickRemoveIcon}
        />
      </div>
      <Icon
        id='search-line'
        className='cursor-pointer text-gray-accent1'
        onClick={handleSetSearchKeyword}
      />
    </div>
  );
};

export default SearchBar;
