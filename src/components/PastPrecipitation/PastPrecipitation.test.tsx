/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PastPrecipitation from './PastPrecipitation';

test('renders PastPrecipitation component with canvas and summary text', () => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
  }))  
  const data = [1,2,3];
  const { getByText } = render(<PastPrecipitation data={data}/>);

  // Check if the summary text is rendered correctly
  expect(getByText('Past Precip. Summary (in)')).toBeInTheDocument();
});