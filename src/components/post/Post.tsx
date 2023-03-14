import * as React from 'react';
import { Component } from 'react';
import classes from './Post.module.css';
import { IPost } from './Post.types';

interface PostProps {
  post: IPost;
}

class Post extends Component<PostProps> {
  render() {
    return (
      <div className={classes.post}>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.description}</p>
      </div>
    );
  }
}

export default Post;
