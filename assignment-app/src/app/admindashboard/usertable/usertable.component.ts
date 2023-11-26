import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment } from '../../models/assignment.model';
import { AssignmentsService } from '../../services/assignments.service';

// import mat MatPaginator
import { NgxPaginationModule } from 'ngx-pagination';
import { User } from '../../models/users.model';
import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-usertable',
  standalone: true,
  imports: [CommonModule  , NgxPaginationModule],
  templateUrl: './usertable.component.html',
  styleUrl: './usertable.component.css'
})
export class UsertableComponent {

  assignments !: Assignment[];
  users !: User[];


  p: number = 1; // Current page number
  itemsPerPage: number = 5; // Number of items to display per page


  async getAssignments() {
    (await this.assignmentsService.getAssignments()).subscribe((assignments) => {
      this.assignments = assignments;
    });
  }

  constructor(private assignmentsService:AssignmentsService , private UsersService:UsersService) { }

  ngOnInit() {

   this.getAssignments();
   this.getUsers();


  }



  // get users from the service
  getUsers(){
    this.UsersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  getUserRole(User:User){
    console.log(User.IsAdmin);
    return User.IsAdmin;
  }
  
     
  
 
}
