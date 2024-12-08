import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmployeeForm from '../components/EmployeeForm';

describe('EmployeeForm Component', () => {
  const mockOnSave = vi.fn(); // Use Vitest's vi.fn()

  test('renders the form correctly', () => {
    render(<EmployeeForm onSave={mockOnSave} />);

    // Use specific IDs or placeholders to ensure only one element matches
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Contact Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Role')).toBeInTheDocument();
  });

  test('calls onSave with correct data on form submission', () => {
    render(<EmployeeForm onSave={mockOnSave} />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Contact Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Role'), { target: { value: 'cashier' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Save/i));

    // Check if mockOnSave is called with the correct data
    expect(mockOnSave).toHaveBeenCalledWith({
      username: 'testuser',
      name: 'Test User',
      email: 'test@example.com',
      contactNumber: '1234567890',
      role: 'cashier',
    });
  });
});
