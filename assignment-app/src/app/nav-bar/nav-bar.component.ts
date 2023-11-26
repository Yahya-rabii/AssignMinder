import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule , MatIconModule , MatToolbarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent  {
  constructor( private authenticationService: AuthenticationService) { }

  logout() {
    localStorage.removeItem('token');



    // refresh the page : 
    window.location.href = "/";
  }


  // check if the user is logged in or not
  isLoggedIn() {
    return this.authenticationService.isAuthenticated();
  }

}
