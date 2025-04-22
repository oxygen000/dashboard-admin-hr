import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { ThemeService } from '../../servers/theme.service';

@Component({
  selector: 'app-theme',
  imports: [CommonModule],
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent {
  isDarkMode = false;

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  ngOnInit() {
    this.themeService.theme$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }
  @HostBinding('class.isDark') get isDark() {
    return this.themeService.isDarkMode;
  }
}
