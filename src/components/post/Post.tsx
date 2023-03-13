import * as React from 'react';
import { Component } from 'react';
import classes from './Post.module.css';
import { IPostProps } from './Post.types';

class Post extends Component<IPostProps> {
  render() {
    return (
      <div className={classes.post}>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Post;
