import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart'; 
import { TICKETS, Tickets } from '../../data/tickets';


@Component({
  selector: 'app-tickets',
  imports: [RouterModule, CommonModule, FormsModule,ChartModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {

  tickets: Tickets[] = TICKETS;

  
  selectedTicket: any = null;
  
  selectTicket(ticket: any) {
    this.selectedTicket = { ...ticket };
  }
  
  cancelReply() {
    this.selectedTicket = null;
  }
  
  submitReply() {
    const index = this.tickets.findIndex(t => t.id === this.selectedTicket.id);
    if (index !== -1) {
      this.tickets[index] = { ...this.selectedTicket };
      this.updateChart(); 
      this.selectedTicket = null;
    }
  }
  
  chartData: any;
  chartOptions: any;
  
  ngOnInit() {
    this.setupChart();
  }
  
  setupChart() {
    const counts = {
      open: this.tickets.filter(t => t.status === 'open').length,
      in_progress: this.tickets.filter(t => t.status === 'in_progress').length,
      completed: this.tickets.filter(t => t.status === 'completed').length,
    };
  
    this.chartData = {
      labels: ['Open', 'In Progress', 'Completed'],
      datasets: [
        {
          data: [counts.open, counts.in_progress, counts.completed],
          backgroundColor: ['#f87171', '#facc15', '#4ade80'],
          hoverBackgroundColor: ['#ef4444', '#eab308', '#22c55e']
        }
      ]
    };
  
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#9ca3af'
          }
        }
      }
    };
  }
  
  updateChart() {
    this.setupChart();
  }
  
}
