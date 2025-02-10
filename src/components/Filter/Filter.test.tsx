import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Filter } from './Filter';

describe('Filter Component', () => {
  it('renders the component correctly', () => {
    render(<Filter filters={{}} onFilterChange={()=>{}} />);

    const colorFilter = screen.getByRole('heading', { name: /color/i });
    const manufacturerFilter = screen.getByRole('heading', { name: /manufacturer/i });
    expect(colorFilter).toBeInTheDocument();
    expect(manufacturerFilter).toBeInTheDocument();
    expect(screen.getByText(/Filter/i)).toBeInTheDocument();
  });
});
