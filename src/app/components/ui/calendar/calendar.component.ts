// Angular core and common modules
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar', // Selector to use this component
  standalone: true, // This component is standalone and self-contained
  imports: [
    // Modules imported to be used inside this component
    CommonModule,
    FormsModule,
  ],
  templateUrl: './calendar.component.html', // Template file path
  styleUrls: ['./calendar.component.scss'], // Style file path
})
export class CalendarComponent {
  // Current month name and year displayed in the calendar
  currentMonth!: string;
  currentYear!: number;

  // Currently selected day in the calendar (if any)
  selectedDay: number | null = null;

  // New task input field value
  newTask: string = '';

  // Days of the week shown in the calendar header
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Days array representing the structure of the month including leading empty days
  days: number[] = [];

  // A map of events stored by date keys (e.g., "2025-4-25": ["Task 1", "Task 2"])
  events: { [key: string]: string[] } = {};

  // Initialize current month/year and generate days when component loads
  ngOnInit() {
    const today = new Date();
    this.currentMonth = this.getMonthName(today.getMonth());
    this.currentYear = today.getFullYear();
    this.generateDays();
  }

  // Convert month index (0–11) to month name (e.g., 0 -> January)
  getMonthName(index: number): string {
    return new Date(0, index).toLocaleString('default', { month: 'long' });
  }

  // Generate the days to show in the calendar for the current month
  generateDays() {
    const date = new Date(this.currentYear, this.getMonthIndex(), 1);
    const daysInMonth = new Date(this.currentYear, this.getMonthIndex() + 1, 0).getDate();
    const startDay = date.getDay(); // Day index of the first day in the month

    this.days = [];
    // Add empty placeholders for days before the 1st of the month
    for (let i = 0; i < startDay; i++) this.days.push(0);

    // Add actual days of the month
    for (let i = 1; i <= daysInMonth; i++) this.days.push(i);
  }

  // Convert month name to month index (0–11)
  getMonthIndex(): number {
    return new Date(`${this.currentMonth} 1, ${this.currentYear}`).getMonth();
  }

  // Select a day in the calendar
  selectDay(day: number) {
    this.selectedDay = day;
  }

  // Check if the given day is today
  isToday(day: number): boolean {
    const today = new Date();
    return (
      day === today.getDate() &&
      this.getMonthIndex() === today.getMonth() &&
      this.currentYear === today.getFullYear()
    );
  }

  // Generate a unique key for each day to store/retrieve tasks (e.g., "2025-4-25")
  getKey(day: number): string {
    return `${this.currentYear}-${this.getMonthIndex() + 1}-${day}`;
  }

  // Retrieve all events/tasks for a specific day
  getDayEvents(day: number): string[] {
    return this.events[this.getKey(day)] || [];
  }

  // Add a new task to the selected day
  addTask() {
    if (!this.newTask.trim() || this.selectedDay === null) return;

    const key = this.getKey(this.selectedDay);

    // If no tasks exist for that day, initialize an empty array
    if (!this.events[key]) {
      this.events[key] = [];
    }

    // Add task and clear input
    this.events[key].push(this.newTask.trim());
    this.newTask = '';
  }

  // Delete a specific task from a day
  deleteTask(day: number, event: string) {
    const key = this.getKey(day);
    this.events[key] = this.events[key].filter((e) => e !== event);

    // If no tasks remain, remove the key from the events object
    if (this.events[key].length === 0) delete this.events[key];
  }

  // Navigate to previous month and regenerate days
  previousMonth() {
    const index = this.getMonthIndex();
    if (index === 0) {
      this.currentYear--;
      this.currentMonth = this.getMonthName(11); // Go to December of previous year
    } else {
      this.currentMonth = this.getMonthName(index - 1);
    }
    this.selectedDay = null;
    this.generateDays();
  }

  // Navigate to next month and regenerate days
  nextMonth() {
    const index = this.getMonthIndex();
    if (index === 11) {
      this.currentYear++;
      this.currentMonth = this.getMonthName(0); // Go to January of next year
    } else {
      this.currentMonth = this.getMonthName(index + 1);
    }
    this.selectedDay = null;
    this.generateDays();
  }
}
