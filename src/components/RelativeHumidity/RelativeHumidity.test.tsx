/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelativeHumidity from './RelativeHumidity';

test('renders RelativeHumidity component with given value', () => {
  const value = 60;
  const unit = '%';
  const { getByText } = render(<RelativeHumidity unit={unit} value={value} />);

  // Check if the value is rendered correctly
  expect(getByText(value)).toBeInTheDocument();

  // Check if the label is rendered correctly
  expect(getByText(`Rel. Humidity (${unit})`)).toBeInTheDocument();
});