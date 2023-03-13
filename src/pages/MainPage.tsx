import Post from '../components/post/Post';

function MainPage({}) {
  return (
    <div>
      <h1>Список постов</h1>
      <Post title="Первый" description="Это первый пост"></Post>
      <Post title="Второй" description="Это второй пост"></Post>
    </div>
  );
}

export default MainPage;
