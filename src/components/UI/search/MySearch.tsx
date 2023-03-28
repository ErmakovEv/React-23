import * as React from 'react';
import { Component, ChangeEvent } from 'react';
import './MySearch.css';

type MySearchProps = Record<string, never>;

interface MySearchState {
  search: string;
}

class MySearch extends Component<MySearchProps, MySearchState> {
  constructor(props: MySearchProps) {
    super(props);
    this.state = { search: localStorage.getItem('search') || 'search..' };
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.search);
  }

  searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <input
        type="text"
        placeholder={this.state.search}
        className="search"
        onChange={this.searchHandler}
      />
    );
  }
}

export default MySearch;
