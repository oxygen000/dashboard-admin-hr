import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



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
  
  employees = [
    { name: 'Ahmed Hassan', position: 'Data Scientist', department: 'Engineering', hireDate: '2021-11-12', email: 'ahmed.hassan@example.com', phone: '+201234567890' },
    { name: 'Sara Mohamed', position: 'UX Designer', department: 'Design', hireDate: '2020-05-20', email: 'sara.mohamed@example.com', phone: '+201234567891' },
    { name: 'Mahmoud Ali', position: 'Project Manager', department: 'Product', hireDate: '2022-09-03', email: 'mahmoud.ali@example.com', phone: '+201234567892' },
    { name: 'Fatma Youssef', position: 'HR Specialist', department: 'HR', hireDate: '2021-06-25', email: 'fatma.youssef@example.com', phone: '+201234567893' },
    { name: 'Omar Khaled', position: 'Marketing Specialist', department: 'Marketing', hireDate: '2022-04-10', email: 'omar.khaled@example.com', phone: '+201234567894' },
    { name: 'Mona Abdelrahman', position: 'Quality Assurance', department: 'Engineering', hireDate: '2023-02-28', email: 'mona.abdelrahman@example.com', phone: '+201234567895' },
    { name: 'Youssef Saad', position: 'Sales Executive', department: 'Sales', hireDate: '2021-08-15', email: 'youssef.saad@example.com', phone: '+201234567896' },
    { name: 'Reem Khalil', position: 'Business Analyst', department: 'Product', hireDate: '2020-12-01', email: 'reem.khalil@example.com', phone: '+201234567897' }
  ];
  
  
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
      // تحديث الموظف
      this.updateEmployee(this.employeeForm);
    } else {
      // إضافة موظف جديد
      this.addEmployee(this.employeeForm);
    }
    this.closeModal(); // إغلاق النموذج
  }

  // Update an employee in the local list
  updateEmployee(updatedEmployee: any) {
    const index = this.employees.findIndex(emp => emp.name === updatedEmployee.name);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
      this.applyFilter(); // تحديث القائمة المعروضة
    }
  }

  // Add a new employee to the local list
  addEmployee(newEmployee: any) {
    this.employees.push(newEmployee);
    this.applyFilter(); // تحديث القائمة المعروضة
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
    this.applyFilter(); // تحديث القائمة المعروضة
  }
}



