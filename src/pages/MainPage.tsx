import * as React from 'react';
import { Component } from 'react';
import PostService from '../components/api/PostService';
import { IPost } from '../components/post/Post.types';
import PostList from '../components/postList/PostList';

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
    PostService.getAllHeadlines().then((data) => this.setState({ posts: data }));
  }

  render() {
    return (
      <div>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default MainPage;
