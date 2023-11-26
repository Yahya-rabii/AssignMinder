// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from './services/user.service';
@Injectable({
  providedIn: 'root',

})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router ,
    private UsersService:UsersService

  ) {}

  async canActivate(): Promise<boolean> {
    let isAdmin = false;
  
    if (this.authService.isAuthenticated()) {
      try {
        const result = await this.UsersService.getTheCurrentUserRole();
        isAdmin = result;
      } catch (error) {
        console.error('Error getting user role:', error);
      }
    }
  
    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
  
}
