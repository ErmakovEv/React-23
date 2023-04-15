import * as React from 'react';
import PostList from '../components/postList/PostList';
import MySearch from '../components/UI/search/MySearch';
import { IPost } from '../components/post/Post.types';
import MyModal from '../components/UI/myModal/MyModal';
import BigCard from '../components/bigPost/bigPost';
import { cardsApi } from '../redux/services/cardsService';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks/redux';
import { searchSlice } from '../redux/store/reducers/searchSlice';

const MainPage = () => {
  const { mySearch } = useAppSelector((state) => state.searchReducer);
  const { setSearch } = searchSlice.actions;

  const dispatch = useAppDispatch();

  const { data: data, error, isLoading } = cardsApi.useFetchCardsQuery(mySearch);

  const [modal, setModal] = React.useState<boolean>(false);

  const [bigCard, setBigCard] = React.useState<IPost>({});

  const searchSubmitHandler = (searchSubmitValue: string) => {
    dispatch(setSearch(searchSubmitValue));
  };

  const openModal = (id: number) => {
    setModal(true);

    const currentBidGard = data?.docs?.find((item) => item._id === id);
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
        <MySearch searchSubmitHandler={searchSubmitHandler} searchValue={mySearch} />
        {isLoading ? (
          <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>Loading...</h1>
        ) : (
          <PostList posts={data?.docs} cb={openModal} />
        )}
        {error && <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>Ошибка</h1>}
      </div>
      <div className="FooterSpacer" />
    </div>
  );
};

export default MainPage;
