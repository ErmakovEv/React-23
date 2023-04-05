import * as React from 'react';
import classes from './Post.module.css';
import { IPost } from './Post.types';

interface PostProps {
  post: IPost;
}

const Post = (props: PostProps) => {
  return (
    <div className={classes.post}>
      <img src={props.post.urlToImage} alt="post_img" />
      <h3>{props.post.title}</h3>
      <p className="post_source">
        By <span>{props.post.source?.name}</span>
      </p>
      <hr />
      <div className={classes.post_icons}>
        <div>👍 - 0</div>
        <div>👎 - 0</div>
        <div>👀 - 0</div>
      </div>
    </div>
  );
};

export default Post;
