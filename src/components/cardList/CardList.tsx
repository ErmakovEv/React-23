import * as React from 'react';
import { Component } from 'react';
import { ICard } from '../card/Card.types';
import Card from '../card/Card';
import classes from './CardList.module.css';

interface CardListProps {
  cards: ICard[];
}

type CardListState = Record<string, never>;

class CardList extends Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);
  }
  render() {
    return (
      <div className={classes.card_container}>
        {this.props.cards.length ? (
          this.props.cards.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              sex={item.sex}
              date={item.date}
              speciality={item.speciality}
              technology={item.technology}
              avaSrc={item.avaSrc}
            />
          ))
        ) : (
          <h1 className={classes.empty}>Карточек нет!</h1>
        )}
      </div>
    );
  }
}

export default CardList;
