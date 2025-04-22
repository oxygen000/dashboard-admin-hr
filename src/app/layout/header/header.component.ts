import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from '../../components/theme/theme.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, ThemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isUserOpen = false;
  isNotificationOpen = false;

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
  toggleUser() {
    this.isUserOpen = !this.isUserOpen;
  }
  toggleNotification() {
    this.isNotificationOpen = !this.isNotificationOpen;
  }
}
