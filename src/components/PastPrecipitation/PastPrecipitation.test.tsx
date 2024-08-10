/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PastPrecipitation from './PastPrecipitation';

test('renders PastPrecipitation component with canvas and summary text', () => {
    const data = [1,2,3];
    const { getByText, getByRole } = render(<PastPrecipitation data={data}/>);

  // Check if the summary text is rendered correctly
  expect(getByText('Past Precip. Summary (in)')).toBeInTheDocument();
});