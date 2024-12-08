import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

const MainPage = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Fetch employees from the backend
  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/employees/');
      setEmployees(response.data);
    } catch (error) {
      console.error("There was an error fetching the employees", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handle saving or updating an employee
  const handleSave = async (employeeData) => {
    try {
      if (selectedEmployee) {
        // Update the existing employee
        await axios.put(`http://127.0.0.1:8000/api/employees/${selectedEmployee.id}/`, employeeData);
      } else {
        // Add a new employee
        await axios.post('http://127.0.0.1:8000/api/employees/', employeeData);
      }
      fetchEmployees(); // Refresh the employee list
      setSelectedEmployee(null); // Clear the selected employee after save
    } catch (error) {
      console.error("There was an error saving the employee", error);
    }
  };

  // Handle editing an employee
  const handleEdit = (employee) => {
    setSelectedEmployee(employee); // Set the employee to be edited
  };

  // Handle deleting an employee
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/employees/${id}/`);
      fetchEmployees(); // Refresh the employee list after deletion
    } catch (error) {
      console.error("There was an error deleting the employee", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-8 text-red-600">Employee Management System</h1>
      <div className="flex space-x-8">
        <div className="w-1/3">
          <EmployeeForm selectedEmployee={selectedEmployee} onSave={handleSave} />
        </div>
        <div className="w-2/3">
          <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
