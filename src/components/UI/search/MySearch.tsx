import * as React from 'react';
import './MySearch.css';

// type MySearchProps = Record<string, never>;

// interface MySearchState {
//   search: string;
// }

// class MySearch extends Component<MySearchProps, MySearchState> {
//   constructor(props: MySearchProps) {
//     super(props);
//     this.state = { search: localStorage.getItem('search') || 'search..' };
//   }

//   componentWillUnmount(): void {
//     localStorage.setItem('search', this.state.search);
//   }

//   searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     this.setState({ search: e.target.value });
//   };

//   render() {
//     return (
//       <input
//         type="text"
//         placeholder={this.state.search}
//         className="search"
//         onChange={this.searchHandler}
//       />
//     );
//   }
// }

const MySearch = () => {
  const [search, setSearch] = React.useState(localStorage.getItem('search') || '');
  const inputEl = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const refValue = inputEl.current;
    return () => {
      console.log('unMount');
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
