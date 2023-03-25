import * as React from 'react';
import { Component } from 'react';

interface CardProps {
  name: string;
  sex: string | null;
  date: string;
  speciality: string | null;
  technology: string[];
  avaSrc: string | undefined;
}

type CardState = Record<string, never>;

class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.sex}</h2>
        <h2>{this.props.date}</h2>
        <h2>{this.props.speciality}</h2>
        <h2>{this.props.technology.join(' ')}</h2>
        <img src={this.props.avaSrc} alt="ava" style={{ width: '100px' }} />
      </div>
    );
  }
}

export default Card;
