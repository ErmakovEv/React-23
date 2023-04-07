import * as React from 'react';
import './MySearch.css';
import { SearchProps } from './MySearch.types';

const MySearch: React.FC<SearchProps> = ({
  searchSubmitHandler,
  searchChangeHandler,
  searchValue,
}) => {
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchSubmitHandler(e.currentTarget.value);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchChangeHandler(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchValue}
      className="search input"
      onKeyDown={keyDownHandler}
      onChange={changeHandler}
      // ref={inputEl}
    />
  );
};

export default MySearch;
