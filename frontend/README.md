# Employee Management System (EMS)

## Description
The **Employee Management System (EMS)** is a web-based application designed to manage employee data efficiently. Built with a **React** frontend and a **Django REST Framework (DRF)** backend, the system enables users to perform CRUD operations (Create, Read, Update, Delete) on employee records. It provides an intuitive interface for adding, editing, and deleting employee details. The roles of employees can be categorized as either **Manager** or **Cashier**, with validations and role dropdowns implemented for ease of use.

### Key Features:
1. **Frontend**:
   - Built with React and styled with Tailwind CSS.
   - Allows users to add, edit, and delete employees.
   - Implements data filtering and searching by roles and keywords.
   - Fully responsive design.

2. **Backend**:
   - RESTful API built with Django REST Framework.
   - Handles employee record storage and retrieval.
   - Validates employee roles (Manager or Cashier).
   - Uses SQLite as the database for simplicity and rapid development.

3. **Testing**:
   - Comprehensive unit tests for both React components and the Django backend.
   - Includes Jest and Vitest for frontend testing.

---
## Database Structure

The database uses a single table, `Employee`, with the following structure:

| **Field Name**     | **Data Type**         | **Description**                    |
|---------------------|-----------------------|-------------------------------------|
| `id`               | Integer (Auto)        | Unique identifier for each employee. |
| `username`         | CharField (Unique)    | Unique username for employees.       |
| `name`             | CharField            | Full name of the employee.          |
| `email`            | EmailField           | Email address of the employee.       |
| `contact_number`   | CharField            | Employee's contact number.          |
| `role`             | CharField            | Role of the employee (**Manager** or **Cashier**). |

### Notes:
- **Primary Key**: The `id` field is automatically incremented and serves as the primary key.
- **Validation**: 
  - The `email` field ensures valid email addresses.
  - The `role` field is restricted to either **Manager** or **Cashier**.
- The database is configured to use **SQLite** by default but can be switched to another database like PostgreSQL or MySQL with minimal configuration.


---
## Database Structure: 
- Hannah Bea R. Alcaide
- Job Aaron Pimente
- Edward Anthony Quianzon
- Isiah Gilmore Veneracion