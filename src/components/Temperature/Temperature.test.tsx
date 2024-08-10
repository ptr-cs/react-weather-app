/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Temperature from './Temperature';

test('renders Temperature component with given value and unit', () => {
  const { getByText } = render(<Temperature value={25} unit="°C" />);

  // Check if the value is rendered correctly
  expect(getByText('25°')).toBeInTheDocument();

  // Check if the unit is rendered correctly
  expect(getByText('Temp. (°C)')).toBeInTheDocument();
});