import * as React from 'react';
import './MySearch.css';
import { SearchProps } from './MySearch.types';

const MySearch: React.FC<SearchProps> = ({ searchHandler }) => {
  const [search, setSearch] = React.useState(localStorage.getItem('search') || '');
  const inputEl = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    console.log('MySearch');
    const refValue = inputEl.current;
    return () => {
      localStorage.setItem('search', refValue?.value || '');
    };
  }, []);

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler(e.currentTarget.value);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={search}
      className="search"
      onKeyDown={keyDownHandler}
      onChange={changeHandler}
      ref={inputEl}
    />
  );
};

export default MySearch;
