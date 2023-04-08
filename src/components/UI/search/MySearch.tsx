import * as React from 'react';
import './MySearch.css';
import { SearchProps } from './MySearch.types';

const MySearch: React.FC<SearchProps> = ({ searchSubmitHandler, searchValue }) => {
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchSubmitHandler(e.currentTarget.value);
    }
  };

  return (
    <input
      type="text"
      defaultValue={searchValue}
      className="search input"
      onKeyDown={keyDownHandler}
      data-testid="search"
    />
  );
};

export default MySearch;
