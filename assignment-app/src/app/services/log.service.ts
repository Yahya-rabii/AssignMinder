import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  log(Assignment:any ,action:string) {
    //write log to a file instead of console.log
    console.log(Assignment+' '+action);
  }
}



