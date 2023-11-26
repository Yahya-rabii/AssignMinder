import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import mat-sidenav-container
import {MatSidenavModule} from '@angular/material/sidenav';
//import mat-nav-list
import {MatListModule} from '@angular/material/list';
//import mat-toolbar
import {MatToolbarModule} from '@angular/material/toolbar';
//import mat-icon
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service'
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule , MatSidenavModule , MatListModule , MatToolbarModule , MatIconModule ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor( private router: Router , private authenticationService : AuthenticationService , private UsersService:UsersService) { }
 

  isAdmin: boolean = false;
  

  ngOnInit() {
    if (this.isLoggedIn()) {
      this.UsersService.getTheCurrentUserRole().then(result => {
        this.isAdmin = result;
      });
    }
  }
  
// get current user role 
 
navigateToAssignments() {
  this.router.navigate(['/assignments']);

}



isLoggedIn(){

return this.authenticationService.isAuthenticated();

}

}
