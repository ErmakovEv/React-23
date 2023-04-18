import { render, screen } from '@testing-library/react';
import CardList from '../components/cardList/CardList';

const cards = [
  {
    name: 'test-name1',
    sex: 'test',
    date: '00-00-0000',
    speciality: 'test',
    technology: ['HTML', 'SACC'],
    avaSrc: 'test',
  },
];

describe('FormPage', () => {
  it('render empty CardList', () => {
    render(<CardList cards={[]} />);
    expect(screen.getByText(/Карточек нет!/)).toBeInTheDocument();
  });

  it('render CardList with cards', () => {
    render(<CardList cards={cards} />);
    expect(screen.getByText(/test-name1/)).toBeInTheDocument();
  });
});
