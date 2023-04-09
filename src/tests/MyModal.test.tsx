import React from 'react';
import { render, screen } from '@testing-library/react';
import MyModal from '../components/UI/myModal/MyModal';
import userEvent from '@testing-library/user-event';

describe('MyModal components', () => {
  const setVisible = () => {};

  it('render', () => {
    const children = 'test';

    render(
      <MyModal visible={false} setVisible={setVisible}>
        {children}
      </MyModal>
    );
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('visible=true', () => {
    const children = 'test';

    render(
      <MyModal visible={true} setVisible={setVisible}>
        {children}
      </MyModal>
    );
    expect(screen.getByTestId('modal-root').classList.contains('active')).toBe(true);
  });

  it('visible fn', () => {
    const setVisible = jest.fn();

    render(
      <MyModal visible={true} setVisible={setVisible}>
        test
      </MyModal>
    );

    const rootEl = screen.getByTestId('modal-root');
    const buttonEl = screen.getByRole('button');
    userEvent.click(rootEl);
    userEvent.click(buttonEl);
    expect(setVisible.mock.calls).toEqual([[false], [false]]);
  });
});
