import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Input} from '@angular/core';
import { Assignment } from '../../models/assignment.model';
// import mat card module
import {MatCardModule} from '@angular/material/card';

import { UsersService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
// import mat checkbox module
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AssignmentsService } from '../../services/assignments.service';
import { initFlowbite } from 'flowbite';
// import flowbite-button
@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule , MatCardModule , MatCheckboxModule ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
  @Input() assignmentTransmis!: Assignment | null;
  showDetail : boolean = false;
  isAdmin: boolean = false;

  ngOnInit() {

    initFlowbite();
    if (this.IsloggedIn()) {
      this.UsersService.getTheCurrentUserRole().then(result => {
        this.isAdmin = result;
      });
    }
   }

  IsloggedIn(){
    return this.authenticationService.isAuthenticated();
  }
 

// add the logic of onRenduChange() method :
  onRenduChange(event: any) {
    this.assignmentTransmis!.Rendu = event.checked;
    console.log(event);
    this.assignmentsService.updateAssignment(this.assignmentTransmis!).subscribe((message) => {
      console.log(message);
      this.showDetail = true;
    });
  }

  constructor(private assignmentsService:AssignmentsService , private UsersService:UsersService , private authenticationService:AuthenticationService) { }
  showDetails :boolean = true;

  async onDeleteAssignment() {
    
  this.assignmentsService.deleteAssignment(this.assignmentTransmis!).subscribe((message) => {
      console.log(message);

    });

    this.assignmentTransmis = null;

  }

  onUpdateAssignment() {
    
    this.assignmentsService.updateAssignment(this.assignmentTransmis!).subscribe((message) => {
      console.log(message);
      this.showDetail = true;
    });

  }

}

