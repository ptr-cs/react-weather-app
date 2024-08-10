/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocationInfo from './LocationInfo';

test('renders LocationInfo component with given location details', () => {
  const city="New York";
  const state="NY";
  const date="01/01/2000";
  const { getByText } = render(<LocationInfo city={city} state={state} date={date} />);

  // Check if the city, state is rendered correctly
  expect(getByText(`${city}, ${state}`)).toBeInTheDocument();
  
  // Check if the city is rendered correctly
  expect(getByText(date)).toBeInTheDocument();
});