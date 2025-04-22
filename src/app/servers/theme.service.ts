import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = false;
  private isBrowser: boolean;
  private themeSubject = new BehaviorSubject<boolean>(false);
  theme$ = this.themeSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme');
      let isDark = false;

      if (savedTheme === 'dark') {
        isDark = true;
      } else if (savedTheme === null) {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      this.setTheme(isDark);
    }
  }

  toggleTheme() {
    const newTheme = !this.themeSubject.value;
    this.setTheme(newTheme);
    if (this.isBrowser) {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }
  }

  private setTheme(isDark: boolean) {
    this.themeSubject.next(isDark);

    if (this.isBrowser) {
      const html = document.documentElement;
      html.classList.toggle('dark', isDark);
      html.classList.toggle('light', !isDark);
    }
  }
}
