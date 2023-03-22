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
        <img src={this.props.post.urlToImage} alt="post_img" />
        <h3>{this.props.post.title}</h3>
        <p className="post_source">
          By <span>{this.props.post.source?.name}</span>
        </p>
        <hr />
        <div className={classes.post_icons}>
          <div>👍 - 0</div>
          <div>👎 - 0</div>
          <div>👀 - 0</div>
        </div>
      </div>
    );
  }
}

export default Post;
