/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrentConditions from './CurrentConditions';

test('renders CurrentConditions component with given description', () => {
  const description = "Partly Cloudy";
  const { getByText } = render(<CurrentConditions description={description} />);

  // Check if the description is rendered correctly
  expect(getByText(description)).toBeInTheDocument();

  // Check if the "Current Conditions" label is rendered correctly
  expect(getByText('Current Conditions')).toBeInTheDocument();
});