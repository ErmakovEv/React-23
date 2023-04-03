import * as React from 'react';
import PostService from '../components/api/PostService';
import PostList from '../components/postList/PostList';
import MySearch from '../components/UI/search/MySearch';

const MainPage = () => {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = async (query: string | undefined) => {
    const data = await PostService.getAllHeadlines(query);
    setPosts(data);
  };

  React.useEffect(() => {
    console.log('MainPage');
    fetchPosts('');
    return () => PostService.unsibscribe();
  }, []);

  const searchHandler = (search: string) => {
    fetchPosts(search);
  };

  return (
    <div className="main_page__container">
      <MySearch searchHandler={searchHandler} />
      <PostList posts={posts} />
    </div>
  );
};

export default MainPage;
