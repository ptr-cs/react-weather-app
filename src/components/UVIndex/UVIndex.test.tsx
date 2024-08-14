/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UVIndex from './UVIndex';

test('renders UVIndex component with given value', () => {
  const { getByText } = render(<UVIndex value={5} />);

  // Check if the value is rendered correctly
  expect(getByText('5')).toBeInTheDocument();

  // Check if the label is rendered correctly
  expect(getByText('UV Index')).toBeInTheDocument();
});