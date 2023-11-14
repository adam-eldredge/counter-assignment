import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from '../components/Counter'

beforeEach(() => {
  render(<Counter/>);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  const count = screen.getByTestId("count");
  const incrementButton = screen.getByText('+', {exact: false});

  userEvent.click(incrementButton);
  expect(count).toHaveTextContent(1);
});

test('clicking - decrements the count', () => {
  const count = screen.getByTestId("count");
  const incrementButton = screen.getByText('-', {exact: false});

  userEvent.click(incrementButton);
  expect(count).toHaveTextContent(-1);
});
