import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../servers/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'Login';
  email: string = 'test@example.com';
  password: string = '123456';
  token: string = 'your_fake_token_here';
  errorMessage: string = '';
  successMessage: string = '';
  loading: boolean = false;
  showPassword: boolean = false;
  show: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async onSubmit() {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const token = await this.authService.login(this.email, this.password);

    if (typeof token === 'string' && token) {
      localStorage.setItem('token', token);
      this.successMessage = 'Login successful!';

      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      }, 1000);
    } else {
      this.errorMessage = 'Invalid email or password';
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
}
