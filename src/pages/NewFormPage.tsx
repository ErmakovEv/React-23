import * as React from 'react';
import { ICard } from '../components/card/Card.types';
import NewForm from '../components/newForm/NewForm';
import CardList from '../components/cardList/CardList';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks/redux';
import { cardsSlice } from '../redux/store/reducers/cardsSlice';

function NewFormPage() {
  const { cards } = useAppSelector((state) => state.cardsReduscer);
  const { setCards } = cardsSlice.actions;
  const dispatch = useAppDispatch();
  const cardCreater = (card: ICard) => {
    dispatch(setCards(card));
  };

  return (
    <div className="container new_from_page_container">
      <NewForm cardCreateHandler={cardCreater} />
      <CardList cards={cards} />
    </div>
  );
}

export default NewFormPage;
