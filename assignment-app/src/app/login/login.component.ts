import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private authService: AuthenticationService,
    private UsersService: UsersService
  ) {}



   // Method to handle form submission
   public Submit() {
    // Check if the form is valid
    
    //
      // Get the values from the form
      // @ts-ignore
      const email = document?.getElementById('email')?.value;
      // @ts-ignore
      const password = document?.getElementById('password')?.value;
      if (email == null || password == null || email == '' || password == '') {
        alert('Please enter a valid email and password');
      }
      

      // Call your createuser method with email and password
      this.login(email, password);
    
  }

  async login( email: string, password: string){

    try {
      const req = await fetch('http://127.0.0.1:3000/api/users/login', {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      })

      if (req.status !== 200) {
        return alert('Invalid email or password')
      }

      const data = await req.json()
      localStorage.setItem('token', data.token)
      
      //test if the user is admin or not if admin redirect to admin dashboard /admin else redirect to home page / :
      // UsersService.getTheCurrentUserRole(); // this method return true if the user is admin and false if not but its async method so we need to use await or promise

      await this.UsersService.getTheCurrentUserRole().then((result) => {
        if (result) {
          window.location.href = '/admin'
        } 
        else {
          window.location.href = '/'
          

        }
      }
      )
      

      
      
      

      

    } catch (err) {
      console.log(err)
    }
  }
}
