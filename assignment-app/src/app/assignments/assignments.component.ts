import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnInit} from '@angular/core';
import { RenduDirective } from '../shared/rendu.directive';
import { NonrenduDirective } from '../shared/nonrendu.directive';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Assignment } from '../models/assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AssignmentsService } from '../../app/services/assignments.service'
// import mat-list 
import {MatListModule} from '@angular/material/list';
// import mat-card-actions
import {MatCardModule} from '@angular/material/card';


import {MatDividerModule} from '@angular/material/divider';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthenticationService } from '../services/authentication.service';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-assignments',
  standalone: true,

  imports: [CommonModule,MatCardModule ,NgxPaginationModule, RenduDirective , NonrenduDirective , FormsModule , MatInputModule , MatFormFieldModule , MatButtonModule ,  MatDividerModule , AssignmentDetailComponent , MatListModule , AddAssignmentComponent ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})



export class AssignmentsComponent implements OnInit {
  title: string = 'my-assignments-app';
  assignmentSelectionne!: Assignment;
  assignments: Assignment[] = [];
  formvisible: boolean = false;
  isAdmin: boolean = false;

  p: number = 1; // Current page number
  itemsPerPage: number = 5; // Number of items to display per page

  constructor(private assignmentsService: AssignmentsService , private authenticationService: AuthenticationService , private UsersService:UsersService) { }

  getAssignments() {
    this.assignmentsService.getAssignments().subscribe((assignments) => {
        this.assignments = assignments;
      });
    
  }

  addAssignment(assignment: Assignment) {
    this.assignmentsService.addAssignment(assignment).then((val) => {
      val.subscribe((message) => {
        console.log(message);
      });
    });
  }

  ngOnInit() {
    this.getAssignments();
    if (this.IsloggedIn()) {
      this.UsersService.getTheCurrentUserRole().then(result => {
        this.isAdmin = result;
      });
    }
  }

  onAddAssignment() {
    this.formvisible = true;
  }

  onNouvelAssignment(event: Assignment) {
    this.addAssignment(event);
    this.formvisible = false;
  }

 // Assignments Component TS
assignmentClique(assignment: Assignment) {
  console.log('assignmentClique : ', assignment);
  if (this.IsloggedIn())this.assignmentSelectionne = assignment;

}

IsloggedIn(){
  return this.authenticationService.isAuthenticated();
}




}
