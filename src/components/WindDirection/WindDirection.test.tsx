/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WindDirection from './WindDirection';

test('renders WindDirection component with given direction', () => {
  const value = 292.5;
  const { getByText } = render(<WindDirection value={value} />);

  // Check if the direction is rendered correctly
  expect(getByText('Wind Dir. (NW)')).toBeInTheDocument();

  // Check if the label is rendered correctly
  expect(getByText(`${value}°`)).toBeInTheDocument();
});