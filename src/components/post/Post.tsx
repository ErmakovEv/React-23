import * as React from 'react';
import classes from './Post.module.css';
import { IPost } from './Post.types';

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={classes.post}>
      <h3>{post.name}</h3>
    </div>
  );
};

export default Post;
