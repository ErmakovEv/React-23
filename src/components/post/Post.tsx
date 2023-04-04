import * as React from 'react';
import classes from './Post.module.css';
import { IPost } from './Post.types';

interface PostProps {
  post: IPost;
  cb: (id: number) => void;
}

const Post: React.FC<PostProps> = ({ post, cb }) => {
  return (
    <div className={classes.post} onClick={() => (post._id ? cb(post._id) : '')}>
      <h3>{post.name}</h3>
    </div>
  );
};

export default Post;
