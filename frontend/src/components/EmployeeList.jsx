import React, { useState } from "react";
import PropTypes from "prop-types";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("");

  // Filter employees by search and role
  const filteredEmployees = employees.filter((employee) => {
    return (
      (employee.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterRole ? employee.role === filterRole : true)
    );
  });

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
      {/* Search & Filter Section */}
      <div className="mb-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Name or Username"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
          />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
          >
            <option value="">Filter by Role</option>
            <option value="manager">Manager</option>
            <option value="cashier">Cashier</option>
          </select>
        </div>
      </div>

      {/* Employee Table */}
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-red-100 text-lg font-semibold text-gray-700">
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-4 py-2">{employee.username}</td>
                <td className="px-4 py-2">{employee.name}</td>
                <td className="px-4 py-2">{employee.email}</td>
                <td className="px-4 py-2">{employee.role}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onEdit(employee)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(employee.id)}
                    className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center px-4 py-2">
                No employees available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EmployeeList;
