import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from '../pages/MainPage';

describe('MainPage Component', () => {
  test('renders EmployeeForm and EmployeeList components', () => {
    render(<MainPage />);
    expect(screen.getByText(/Employee Management System/i)).toBeInTheDocument();
  });
});
