import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen = false;
  isLoggedIn: boolean = false; // Check actual login status
  currentUser: { firstName: string } | null = null; // Start with null user data

  constructor(private router: Router) {
    // Initialize login status and user information from local storage
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    // Clear login info and navigate to the login page
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
}
