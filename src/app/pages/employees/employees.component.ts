import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Employee, EMPLOYEES } from '../../data/employees';



@Component({
  selector: 'app-employees',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent {
  searchTerm: string = '';
  filteredEmployees: any[] = [];
  isModalOpen: boolean = false;
  isEdit: boolean = false;
  employeeForm: any = {
    name: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    hireDate: ''
  };
  employees: Employee[] = EMPLOYEES;
  
  
  // Initialize filteredEmployees with all employees
  constructor() {
    this.filteredEmployees = [...this.employees];
  }

  // Apply filter based on search term
  applyFilter() {
    if (this.searchTerm) {
      this.filteredEmployees = this.employees.filter(emp =>
        emp.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      // Reset to show all employees if the search term is empty
      this.filteredEmployees = [...this.employees];
    }
  }

  // Open the modal for adding a new employee
  openModal() {
    this.isModalOpen = true;
    this.isEdit = false;
    this.resetForm();
  }

  // Close the modal
  closeModal(event?: any) {
    if (event) event.stopPropagation();
    this.isModalOpen = false;
  }

  // Reset the form to empty values
  resetForm() {
    this.employeeForm = {
      name: '',
      position: '',
      department: '',
      email: '',
      phone: '',
      hireDate: ''
    };
  }

  // Submit the form, either adding or editing an employee
  submitForm() {
    if (this.isEdit) {
      this.updateEmployee(this.employeeForm);
    } else {
      this.addEmployee(this.employeeForm);
    }
    this.closeModal(); 
  }

  // Update an employee in the local list
  updateEmployee(updatedEmployee: any) {
    const index = this.employees.findIndex(emp => emp.name === updatedEmployee.name);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
      this.applyFilter(); 
    }
  }

  // Add a new employee to the local list
  addEmployee(newEmployee: any) {
    this.employees.push(newEmployee);
    this.applyFilter();
  }

  // Open the modal with prefilled data for editing an employee
  editEmployee(emp: any) {
    this.employeeForm = { ...emp }; 
    this.isEdit = true; 
    this.isModalOpen = true; 
  }

  // Delete an employee from the local list
  deleteEmployee(employee: any) {
    this.employees = this.employees.filter(emp => emp !== employee);
    this.applyFilter(); 
  }
}



