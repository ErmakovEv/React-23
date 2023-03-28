import * as React from 'react';
import PostService from '../components/api/PostService';
import PostList from '../components/postList/PostList';
import MySearch from '../components/UI/search/MySearch';

// type MainPageProps {}

// interface MainPageState {
//   posts: IPost[];
// }

// class MainPage extends Component<MainPageProps, MainPageState> {
//   constructor(props: MainPageProps) {
//     super(props);
//     this.state = { posts: [] };
//   }

//   componentDidMount(): void {
//     PostService.getAllHeadlines().then((data) => {
//       this.setState({ posts: data });
//     });
//   }

//   render() {
//     return (
//       <div className="main_page__container">
//         <MySearch />
//         <PostList posts={this.state.posts} />
//       </div>
//     );
//   }
// }

const MainPage = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    PostService.getAllHeadlines().then((data) => {
      setPosts(data);
    });
    return () => PostService.unsibscribe();
  }, []);

  return (
    <div className="main_page__container">
      <MySearch />
      <PostList posts={posts} />
    </div>
  );
};

export default MainPage;
