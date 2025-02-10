import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {
  const mockOnPageChange = jest.fn();

  it('renders correctly with given props', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} />);

    expect(screen.getByText(/page 2 of 5/i)).toBeInTheDocument();
    expect(screen.getByText(/first/i)).toBeInTheDocument();
    expect(screen.getByText(/previous/i)).toBeInTheDocument();
    expect(screen.getByText(/next/i)).toBeInTheDocument();
    expect(screen.getByText(/last/i)).toBeInTheDocument();
  });

  it('disables "First" and "Previous" on the first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);

    expect(screen.getByText(/first/i)).toHaveStyle('cursor: not-allowed');
    expect(screen.getByText(/previous/i)).toHaveStyle('cursor: not-allowed');
  });

  it('disables "Next" and "Last" on the last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={mockOnPageChange} />);

    expect(screen.getByText(/next/i)).toHaveStyle('cursor: not-allowed');
    expect(screen.getByText(/last/i)).toHaveStyle('cursor: not-allowed');
  });

  it('calls onPageChange with correct values on button clicks', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />);

    fireEvent.click(screen.getByText(/first/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText(/previous/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);

    fireEvent.click(screen.getByText(/next/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(4);

    fireEvent.click(screen.getByText(/last/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(5);
  });
});
