/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DewPoint from './DewPoint';

test('renders DewPoint component with given dew point value', () => {
  const dewPointValue = 15;
  const unit="F";
  const { getByText } = render(<DewPoint value={dewPointValue} unit={unit}/>);

  // Check if the dew point value is rendered correctly
  expect(getByText(`${dewPointValue}°`)).toBeInTheDocument();

  // Check if the label is rendered correctly
  expect(getByText(`Dew Point (${unit})`)).toBeInTheDocument();
});