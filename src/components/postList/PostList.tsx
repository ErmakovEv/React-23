import * as React from 'react';
import { IPost } from '../post/Post.types';
import Post from '../post/Post';
import './PostList.css';

interface PostListProps {
  posts: IPost[];
}

const PostList = (props: PostListProps) => {
  if (!props.posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Пока новостей нет!</h1>;
  }
  return (
    <div className="container postlist__container">
      {props.posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default PostList;
