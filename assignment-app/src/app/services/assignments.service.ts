import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';
import { Observable, of } from 'rxjs';
import { LoginService } from './log.service';
import { User } from '../models/users.model';
import { UsersService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [


  ];

  constructor(private loginservice: LoginService, private UsersService: UsersService) { }

  getAssignmentCount(): number {
    return this.assignments.length;
  }

  // Get all assignments
   getAssignments():Observable<Assignment[]> {
    this.loginservice.log(this.assignments.map((assignment) => assignment.get_attributes()), 'get');
    
    const xmlhttp = new XMLHttpRequest();
    const url = 'http://164.90.219.178:3000/api/assignments';
    xmlhttp.open('GET', url, false);
    xmlhttp.send();
    const data = JSON.parse(xmlhttp.responseText);
    for (let i = 0; i < data.docs.length; i++) {
      const assignment = data.docs[i];
      this.assignments.push(new Assignment(assignment.id, assignment.Nom, new Date(assignment.DateDeRendu), assignment.Rendu));
    }


    // call the me

    return of(this.assignments);
  }

  // Delete assignment
   deleteAssignment(assignment: Assignment): Observable<any>{
    this.loginservice.log(assignment.get_attributes(), 'delete');

    const xmlhttp = new XMLHttpRequest();
    const url = 'http://164.90.219.178:3000/api/assignments/'+ assignment.ID;
    xmlhttp.open('DELETE', url, false);
    xmlhttp.send();
    const data = JSON.parse(xmlhttp.responseText);
    console.log(data);
    return of('delete success');


  }

  // Update assignment
  updateAssignment(assignment: Assignment) {
    
    this.loginservice.log(assignment.get_attributes(), 'update');
    const xmlhttp = new XMLHttpRequest();
    const url = 'http://164.90.219.178:3000/api/assignments/' + assignment.ID;
    xmlhttp.open('PATCH', url, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(JSON.stringify(assignment));
    const data = JSON.parse(xmlhttp.responseText);
    console.log(data);
    return of('update success');

    


  }

  async addAssignment(assignment: Assignment): Promise<Observable<any>> {
    try {
      // Get the current user
      const currentUser = await this.UsersService.getTheCurrentUser();

      // Add the current user's ID to the assignment
      assignment.Iduser = currentUser?.ID ?? '';
      assignment.Rendu = false;

      // Make the API call to add the assignment
      await fetch('http://164.90.219.178:3000/api/assignments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assignment),
      });
    } catch (err) {
      console.error(err);
    }

    // Add the assignment to your local assignments array
    this.assignments.push(assignment);

    // Return an observable indicating success
    return of('add success ' + assignment.Nom);
  }
}