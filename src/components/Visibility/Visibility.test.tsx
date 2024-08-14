/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Visibility from './Visibility';

test('renders Visibility component with given value and unit', () => {
  const { getByText } = render(<Visibility value={10} unit="km" />);

  // Check if the value is rendered correctly
  expect(getByText('10')).toBeInTheDocument();

  // Check if the unit is rendered correctly
  expect(getByText('Visibility (km)')).toBeInTheDocument();
});