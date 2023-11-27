import { Injectable } from '@angular/core';
import { User } from '../models/users.model';
import { Observable, of } from 'rxjs';
import { LoginService } from './log.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users : User[] = [];

  constructor(private loginservice: LoginService) {}



  // Get the current user role
  async getTheCurrentUserRole(): Promise< boolean> {
    const token = localStorage.getItem('token');
    let response : boolean= false
    try {
      const req = await fetch('http://164.90.219.178:3000/api/users/me', {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "Authorization": "JWT " + token
        

        },
      })
      const data = await req.json()
      response =  data.user.isAdmin;

    } catch (err) {
      console.log(err)
    }
    
    return response;
  }

// get the current user http://127.0.0.1:3000/api/users/me 
async getTheCurrentUser(): Promise<User | null> {
  const token = localStorage.getItem('token');
  let response: User | null = null; // Initialize to null
  try {
    const req = await fetch('http://164.90.219.178:3000/api/users/me', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "JWT " + token
      },
    });
    const data = await req.json();
    response = new User(data.user.id, data.user.email, data.user.isAdmin);
  } catch (err) {
    console.log(err);
  }
  return response;
}




  


  getUserCount(): number {
    return this.users.length;
  }

  // Get all users
   getUsers():Observable<User[]> {
    this.loginservice.log(this.users.map((user) => user.get_attributes()), 'get');
   
    const xmlhttp = new XMLHttpRequest();
    const url = 'http://164.90.219.178:3000/api/users';
    xmlhttp.open('GET', url, false);
    xmlhttp.send();
    const data = JSON.parse(xmlhttp.responseText);
    for (let i = 0; i < data.docs.length; i++) {
      const user = data.docs[i];
      this.users.push(new User(user.id, user.email, user.IsAdmin));
    }
    return of(this.users);
  }


  // Delete user
   deleteUser(user: User): Observable<any>{
    this.loginservice.log(user.get_attributes(), 'delete');

    const xmlhttp = new XMLHttpRequest();
    const url = 'http://164.90.219.178:3000/api/users/'+ user.ID;
    xmlhttp.open('DELETE', url, false);
    xmlhttp.send();
    const data = JSON.parse(xmlhttp.responseText);
    console.log(data);
    return of('delete success');


  }

  // Update Users
  updateUser(user: User) {
    
    this.loginservice.log(user.get_attributes(), 'update');
    const xmlhttp = new XMLHttpRequest();
    const url = 'http://164.90.219.178:3000/api/users/' + user.ID;
    xmlhttp.open('PATCH', url, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(JSON.stringify(user));
    const data = JSON.parse(xmlhttp.responseText);
    console.log(data);
    return of('update success');

    


  }

  // Add users
  async addUsers(user: User): Promise<Observable<any>> {

    console.log(this.users);
    console.log(user.ID);

    try {
      await fetch('http://164.90.219.178:3000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    } catch (err) {
      console.error(err);
    }

    this.users.push(user);
    return of('add success ' + user.Email);
  }
}
