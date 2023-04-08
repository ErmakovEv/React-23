import * as React from 'react';
import PostService from '../components/api/PostService';
import PostList from '../components/postList/PostList';
import MySearch from '../components/UI/search/MySearch';
import { IPost } from '../components/post/Post.types';
import MyModal from '../components/UI/myModal/MyModal';
import BigCard from '../components/bigPost/bigPost';

const MainPage = () => {
  const initialValueSearch = localStorage.getItem('search') || '';

  const [posts, setPosts] = React.useState<IPost[]>([]);

  const [modal, setModal] = React.useState<boolean>(false);

  const [bigCard, setBigCard] = React.useState<IPost>({});

  const [isPostLoading, setisPostLoading] = React.useState<boolean>(false);

  const fetchPosts = async (query: string | undefined) => {
    setisPostLoading(true);
    const data = await PostService.getAllHeadlines(query);
    setPosts(data);
    setisPostLoading(false);
  };

  React.useEffect(() => {
    fetchPosts(localStorage.getItem('search') || '');
    return () => PostService.unsibscribe();
  }, []);

  const searchSubmitHandler = (searchSubmitValue: string) => {
    localStorage.setItem('search', searchSubmitValue || '');
    fetchPosts(searchSubmitValue);
  };

  const openModal = (id: number) => {
    setModal(true);

    const currentBidGard = posts.find((item) => item._id === id);
    if (currentBidGard) setBigCard(currentBidGard);
  };

  return (
    <div className="App-main">
      <MyModal visible={modal} setVisible={setModal}>
        <BigCard
          name={bigCard.name}
          gender={bigCard.gender}
          hair={bigCard.hair}
          height={bigCard.height}
          race={bigCard.race}
          realm={bigCard.realm}
          spouse={bigCard.spouse}
          death={bigCard.death}
          wikiUrl={bigCard.wikiUrl}
        />
      </MyModal>
      <div className="wrapper">
        <MySearch searchSubmitHandler={searchSubmitHandler} searchValue={initialValueSearch} />
        {isPostLoading ? (
          <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>Loading...</h1>
        ) : (
          <PostList posts={posts} cb={openModal} />
        )}
      </div>
      <div className="FooterSpacer" />
    </div>
  );
};

export default MainPage;
