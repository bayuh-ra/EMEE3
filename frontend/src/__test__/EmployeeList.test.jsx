import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmployeeList from '../components/EmployeeList';

describe('EmployeeList Component', () => {
  const mockEmployees = [
    { id: 1, username: 'user1', name: 'User One', email: 'user1@example.com', role: 'manager' },
    { id: 2, username: 'user2', name: 'User Two', email: 'user2@example.com', role: 'cashier' },
  ];
  const mockOnEdit = vi.fn(); // Use vi.fn() instead of jest.fn()
  const mockOnDelete = vi.fn(); // Use vi.fn() instead of jest.fn()

  test('renders the employee list correctly', () => {
    render(<EmployeeList employees={mockEmployees} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    expect(screen.getByText(/User One/i)).toBeInTheDocument();
    expect(screen.getByText(/User Two/i)).toBeInTheDocument();
  });

  test('calls onEdit when edit button is clicked', () => {
    render(<EmployeeList employees={mockEmployees} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    fireEvent.click(screen.getAllByText(/Edit/i)[0]);
    expect(mockOnEdit).toHaveBeenCalledWith(mockEmployees[0]);
  });

  test('calls onDelete when delete button is clicked', () => {
    render(<EmployeeList employees={mockEmployees} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    fireEvent.click(screen.getAllByText(/Delete/i)[0]);
    expect(mockOnDelete).toHaveBeenCalledWith(mockEmployees[0].id);
  });
});
