/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pressure from './Pressure';

test('renders Pressure component with given value', () => {
  const unit = 'inHg';
  const value = 1013;
  const { getByText } = render(<Pressure unit={unit} value={value} />);

  // Check if the value is rendered correctly
  expect(getByText(value)).toBeInTheDocument();

  // Check if the label is rendered correctly
  expect(getByText(`Pressure (${unit})`)).toBeInTheDocument();
});