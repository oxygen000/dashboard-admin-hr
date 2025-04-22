import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-login',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './layout.login.component.html',
  styleUrl: './layout.login.component.scss',
})
export class LayoutLoginComponent {}
