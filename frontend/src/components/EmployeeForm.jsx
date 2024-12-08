import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const EmployeeForm = ({ selectedEmployee, onSave }) => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    contactNumber: '',
    role: '',
  });

  useEffect(() => {
    if (selectedEmployee) {
      setFormData({
        username: selectedEmployee.username,
        name: selectedEmployee.name,
        email: selectedEmployee.email,
        contactNumber: selectedEmployee.contactNumber,
        role: selectedEmployee.role,
      });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const employeeData = {
      username: formData.username,
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      role: formData.role,
    };
    await onSave(employeeData);
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col">
        <label htmlFor="username" className="text-gray-900 text-lg font-semibold">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-900 text-lg font-semibold">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-900 text-lg font-semibold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="contactNumber" className="text-gray-900 text-lg font-semibold">Contact Number</label>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="role" className="text-gray-900 text-lg font-semibold">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        >
          <option value="cashier">Cashier</option>
          <option value="manager">Manager</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 text-lg font-semibold"
      >
        Save
      </button>
    </form>
  );
};

EmployeeForm.propTypes = {
  selectedEmployee: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    contactNumber: PropTypes.string,
    role: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
};

export default EmployeeForm;
