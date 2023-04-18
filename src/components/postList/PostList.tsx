import * as React from 'react';
import { IPost } from '../post/Post.types';
import Post from '../post/Post';
import './PostList.css';

interface PostListProps {
  posts: IPost[] | undefined;
  cb: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, cb }) => {
  if (!posts?.length) {
    return <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>Пока новостей нет!</h1>;
  }
  return (
    <div className="postlist_container">
      {posts.map((post) => (
        <Post post={post} key={post._id} cb={cb} />
      ))}
    </div>
  );
};

export default PostList;
