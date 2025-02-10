import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CarDetails } from './CarDetails';
import { useCarDetails } from 'hooks';

jest.mock('hooks', () => ({
  useCarDetails: jest.fn(),
}));

describe('CarDetails', () => {
  it('should show loading spinner', () => {
    (useCarDetails as jest.Mock).mockReturnValue({ car: null, loading: true, error: null });
    render(
      <MemoryRouter initialEntries={['/car/1']}>
        <CarDetails />
      </MemoryRouter>
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should show error message', () => {
    (useCarDetails as jest.Mock).mockReturnValue({ car: null, loading: false, error: 'Error' });
    render(
      <MemoryRouter initialEntries={['/car/1']}>
        <CarDetails />
      </MemoryRouter>
    );
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('should show "No car found" if no car data', () => {
    (useCarDetails as jest.Mock).mockReturnValue({ car: null, loading: false, error: null });
    render(
      <MemoryRouter initialEntries={['/car/1']}>
        <CarDetails />
      </MemoryRouter>
    );
    expect(screen.getByText('No car found')).toBeInTheDocument();
  });

  it('should show car details when data is available', () => {
    const car = { manufacturerName: 'Toyota', modelName: 'Corolla', pictureUrl: 'img.jpg' };
    (useCarDetails as jest.Mock).mockReturnValue({ car, loading: false, error: null });
    render(
      <MemoryRouter initialEntries={['/car/1']}>
        <CarDetails />
      </MemoryRouter>
    );
    expect(screen.getByText('Toyota Corolla')).toBeInTheDocument();
  });
});
