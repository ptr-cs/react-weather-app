/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import WindChill from './WindChill';
import '@testing-library/jest-dom';

test('renders WindChill component with given value and unit', () => {
  const { getByText } = render(<WindChill value={-5} unit="°C" />);

  // Check if the value is rendered correctly
  expect(getByText('-5°')).toBeInTheDocument();

  // Check if the unit is rendered correctly
  expect(getByText('Wind Chill (°C)')).toBeInTheDocument();
});