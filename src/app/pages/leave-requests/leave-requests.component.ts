import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LEAVE_REQUESTS, LeaveRequest } from '../../data/leave-requests';

@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.scss'],
})
export class LeaveRequestsComponent {
  // Full list of leave requests
  leaveRequest: LeaveRequest[] = LEAVE_REQUESTS;

  // Filtered list shown in the UI
  filteredLeaveRequest: LeaveRequest[] = [...LEAVE_REQUESTS];

  // Search input text
  searchTerm: string = '';

  // Flag to track if we are editing or adding a new request
  isEdit: boolean = false;

  // Controls modal visibility
  isModalOpen: boolean = false;

  // Form model for adding/editing a leave request
  LeaveRequestForm: LeaveRequest = {
    id: 0,
    name: '',
    department: '',
    startDate: '',
    endDate: '',
    leaveType: '',
    status: 'Pending',
    reason: ''
  };

  // Filter the list based on the search term
  applyFilter() {
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      this.filteredLeaveRequest = this.leaveRequest.filter(req =>
        req.name.toLowerCase().includes(term) ||
        req.department.toLowerCase().includes(term) ||
        req.leaveType.toLowerCase().includes(term) ||
        req.status.toLowerCase().includes(term)
      );
    } else {
      this.filteredLeaveRequest = [...this.leaveRequest];
    }
  }

  // Open the modal and populate form for editing a leave request
  editLeaveRequest(req: LeaveRequest) {
    this.LeaveRequestForm = { ...req };
    this.isEdit = true;
    this.isModalOpen = true;
  }

  // Delete a leave request from the list
  deleteLeaveRequest(req: LeaveRequest) {
    this.leaveRequest = this.leaveRequest.filter(item => item !== req);
    this.applyFilter(); // Re-apply filter after deletion
  }

  // Close the modal and reset form
  closeModal(event?: Event) {
    if (event) event.stopPropagation();
    this.isModalOpen = false;
    this.resetForm();
  }

  // Submit the form: either update or add a leave request
  submitForm() {
    if (this.isEdit) {
      this.updateLeaveRequest(this.LeaveRequestForm);
    } else {
      this.addLeaveRequest(this.LeaveRequestForm);
    }
    this.closeModal();
  }

  // Update an existing leave request in the list
  updateLeaveRequest(updated: LeaveRequest) {
    const index = this.leaveRequest.findIndex(req => req.id === updated.id);
    if (index !== -1) {
      this.leaveRequest[index] = { ...updated };
      this.applyFilter();
    }
  }

  // Add a new leave request to the list
  addLeaveRequest(newReq: LeaveRequest) {
    const newId = this.leaveRequest.length > 0
      ? Math.max(...this.leaveRequest.map(req => req.id)) + 1
      : 1;
    const newLeave = { ...newReq, id: newId };
    this.leaveRequest.push(newLeave);
    this.applyFilter();
  }

  // Reset the form to its default values
  resetForm() {
    this.LeaveRequestForm = {
      id: 0,
      name: '',
      department: '',
      startDate: '',
      endDate: '',
      leaveType: '',
      status: 'Pending',
      reason: ''
    };
    this.isEdit = false;
  }

  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }
}
