import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  
  ngOnInit(): void {}


  login() {
    const { username, password } = this.loginForm.value;
  
    // Retrieve stored user data
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
  
    // Check if credentials match
    if (userData && userData.username === username && userData.password === password) {
      console.log(`Logged in as ${username}`);
      
      // Set login status and store current user info
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify({ firstName: userData.firstName || 'User' }));
      
      // Redirect to the feed after login
      this.router.navigate(['/my-feed']);
    } else {
      console.log('Invalid username or password');
    }
  }
  
}
