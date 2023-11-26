// authentication.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authTokenKey = 'token';


  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.authTokenKey);

  }

  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }
}
