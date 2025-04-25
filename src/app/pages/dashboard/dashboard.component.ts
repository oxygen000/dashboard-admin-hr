import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart'; 
import { CalendarComponent } from '../../components/ui/calendar/calendar.component'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule, CalendarComponent,RouterModule], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'], 
})
export class DashboardComponent implements OnInit {
  chartData: any;
  chartOptions: any;
  performanceData: any;
  lineChartOptions: any;


  ngOnInit() {
    this.chartData = {
      labels: ['Employees', 'Vacations', 'Requests', 'Salaries'], 
      datasets: [
        {
          label: 'Human Resources Statistics', 
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FF6384'],
          data: [120, 80, 40, 100]
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

    this.performanceData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Performance',
          data: [65, 59, 80, 81],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.1
        }
      ]
    };
  }
  


}
