import { render, screen } from '@testing-library/react';
import PostList from '../components/postList/PostList';
import Post from '../components/post/Post';
import userEvent from '@testing-library/user-event';

const testPost = {
  _id: 1,
  name: 'test',
};

describe('PostList', () => {
  it('render empty PostList component', () => {
    render(<PostList posts={[]} cb={() => {}} />);
    expect(screen.getByText(/Пока новостей нет/)).toBeInTheDocument();
  });

  it('render noempty PostList component', () => {
    render(<PostList posts={[testPost]} cb={() => {}} />);
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });

  it('click on post', () => {
    render(<Post post={testPost} cb={() => {}} />);
    const postElem = screen.getByTestId('post') as HTMLDivElement;
    userEvent.click(postElem);
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });
});
