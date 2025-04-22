import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  async login(email: string, password: string): Promise<string | null> {
    if (email === 'test@example.com' && password === '123456') {
      localStorage.setItem('auth_token', 'your_fake_token_here');
      return 'your_fake_token_here';
    } else {
      return null;
    }
  }
  logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('auth_token') !== null;
  }
}
