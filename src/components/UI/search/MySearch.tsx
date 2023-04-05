import * as React from 'react';
import './MySearch.css';

const MySearch = () => {
  const [search, setSearch] = React.useState(localStorage.getItem('search') || '');
  const inputEl = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const refValue = inputEl.current;
    return () => {
      localStorage.setItem('search', refValue?.value || '');
    };
  }, []);
  return (
    <input
      type="text"
      value={search}
      className="search"
      onChange={(e) => setSearch(e.target.value)}
      ref={inputEl}
    />
  );
};

export default MySearch;
