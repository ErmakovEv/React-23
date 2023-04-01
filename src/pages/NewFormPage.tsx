import * as React from 'react';
import { ICard } from '../components/card/Card.types';
import NewForm from '../components/newForm/NewForm';
import CardList from '../components/cardList/CardList';

function NewFormPage() {
  const [cards, setCards] = React.useState<ICard[]>([]);

  const cardCreater = (card: ICard) => {
    console.log(card);
    setCards([...cards, card]);
  };

  return (
    <div className="container new_from_page_container">
      <NewForm cardCreateHandler={cardCreater} />
      <CardList cards={cards} />
    </div>
  );
}

export default NewFormPage;
