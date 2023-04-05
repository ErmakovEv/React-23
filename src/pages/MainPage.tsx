import * as React from 'react';
import PostService from '../components/api/PostService';
import PostList from '../components/postList/PostList';
import MySearch from '../components/UI/search/MySearch';

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
