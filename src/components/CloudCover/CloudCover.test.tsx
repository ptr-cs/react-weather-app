/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CloudCover from './CloudCover';

test('renders CloudCover component with given cloud cover percentage', () => {
  const value = 75;
  const unit = '%';
  const { getByText } = render(<CloudCover value={value} unit={unit} />);

  // Check if the cloud cover percentage is rendered correctly
  expect(getByText(`${value}`)).toBeInTheDocument();

  // Check if the label is rendered correctly
  expect(getByText(`Cloud Cover (${unit})`)).toBeInTheDocument();
});