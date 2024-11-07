import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('') // Added Confirm Password field
  });

  constructor(private router: Router) {}

  register() {
    const { firstName, lastName, username, password, confirmPassword } = this.registerForm.value;

    // Basic password match validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user data in local storage
    const userData = { firstName, lastName, username, password };
    localStorage.setItem('user', JSON.stringify(userData));
    
    console.log(`Registered user: ${firstName} ${lastName} with username ${username}`);
    
    // Simulate successful registration by navigating to the login page
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500);
  }
}
