import { render, screen } from '@testing-library/react';
import PostList from '../components/postList/PostList';

const testPost = {
  title: 'test',
};

describe('PostList', () => {
  it('render empty PostList component', () => {
    render(<PostList posts={[]} cb={() => {}} />);
    expect(screen.getByText(/Пока новостей нет/)).toBeInTheDocument();
  });

  // it('render PostList with test Post', () => {
  //   render(<PostList posts={[testPost]} />);
  //   expect(screen.getByText(/test/)).toBeInTheDocument();
  // });
});
