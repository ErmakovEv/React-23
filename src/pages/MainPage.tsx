import * as React from 'react';
import PostService from '../components/api/PostService';
import PostList from '../components/postList/PostList';
import MySearch from '../components/UI/search/MySearch';
import { IPost } from '../components/post/Post.types';
import MyModal from '../components/UI/myModal/MyModal';

const MainPage = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);

  const [modal, setModal] = React.useState<boolean>(false);

  const [bigCard, setBigCard] = React.useState<IPost>({});

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

  const openModal = (id: number) => {
    setModal(true);

    const currentBidGard = posts.find((item) => item._id === id);
    if (currentBidGard) setBigCard(currentBidGard);
  };

  return (
    <div className="App-main">
      <MyModal visible={modal} setVisible={setModal}>
        <div>
          BIG CARD
          <h1>{bigCard.name}</h1>
          <h2>{bigCard._id}</h2>
        </div>
      </MyModal>
      <div className="wrapper">
        <MySearch searchHandler={searchHandler} />
        <PostList posts={posts} cb={openModal} />
      </div>
      <div className="FooterSpacer" />
    </div>
  );
};

export default MainPage;
