/** @jest-environment jsdom */
import React from 'react';
import { render, screen } from '@testing-library/react';
import WindSpeed from './WindSpeed';
import '@testing-library/jest-dom';

describe('WindSpeed component', () => {
  it('renders WindSpeed component with correct value and unit', () => {
    const value = 10;
    const unit = 'km/h';

    const { container } = render(<WindSpeed value={value} unit={unit} />);
    
    // Log the container to see what's actually rendered
    // console.log(container.innerHTML);

    const windSpeedValue = screen.getByText(value.toString());
    const windSpeedUnit = screen.getByText(`Wind Speed (${unit})`);
    const windIcon = screen.queryByTestId('wind-icon'); // Use queryByTestId for non-existent elements

    expect(windSpeedValue).toBeInTheDocument();
    expect(windSpeedUnit).toBeInTheDocument();

    // This assertion will show what's actually going wrong
    expect(windIcon).toBeInTheDocument();
  });
});
