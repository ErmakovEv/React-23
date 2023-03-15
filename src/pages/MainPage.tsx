import * as React from 'react';
import { Component } from 'react';
import PostService from '../components/api/PostService';
import { IPost } from '../components/post/Post.types';
import PostList from '../components/postList/PostList';
import './page.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainPageProps {}

interface MainPageState {
  posts: IPost[];
}

class MainPage extends Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount(): void {
    PostService.getAllHeadlines().then((data) => {
      console.log(data);
      this.setState({ posts: data });
    });
  }

  render() {
    return (
      <div className="container main_page__container">
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default MainPage;
