import { render, screen } from '@testing-library/react';
import Post from '../components/post/Post';

describe('Post', () => {
  it('render Post', () => {
    render(<Post post={{ title: 'test' }} />);
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });
});
