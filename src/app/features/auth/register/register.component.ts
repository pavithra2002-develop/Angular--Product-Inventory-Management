import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService) { }

  onRegister(form: any): void {
    if (form.valid) {
      const email = form.value.email;

      // Check if email already exists before proceeding
      this.authService.checkEmailExists(email).subscribe((exists: boolean) => {
        if (exists) {
          alert('This email already exists. Please use a different email.');
        } else {
          // Proceed with registration
          this.authService.register(form.value).subscribe(() => {
            alert('Registration successful!');
          });
        }
      });

    } else {
      alert('Please fill out all required fields.');
    }
  }
}
