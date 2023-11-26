import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule  , RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {



  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form group in the constructor
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
    });
  }

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
      this.createUser(email, password);


    
  }


async createUser( email: string, password: string){

  try {
    const req = await fetch('http://127.0.0.1:3000/api/users', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,password
        
      }),
    })
    const data = await req.json()
    
    if (req.status !== 201) {
      return alert('Invalid email or password')
    }
    
    // redirect to login page after successful signup
    window.location.href = '/login';
  

  } catch (err) {
    console.log(err)
  }

}

}