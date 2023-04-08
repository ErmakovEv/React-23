import { render } from '@testing-library/react';
import MainPage from '../pages/MainPage';

describe('MainPage tests', () => {
  it('test loading...', () => {
    const { getByText } = render(<MainPage />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
