import * as React from 'react';
import { Component } from 'react';
import classes from '../post/Post.module.css';

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
      <div className={classes.post}>
        <img src={this.props.avaSrc} alt="ava" />
        <hr />
        <h3 className="post_source">{this.props.name}</h3>
        <p>{this.props.sex}</p>
        <h4>{this.props.date}</h4>
        <h4>{this.props.speciality}</h4>
        <h4>{this.props.technology.join(' ')}</h4>
      </div>
    );
  }
}

export default Card;
