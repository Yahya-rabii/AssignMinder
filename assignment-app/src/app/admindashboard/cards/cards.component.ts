import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentsService } from '../../services/assignments.service';
import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  constructor(private assignmentsService:AssignmentsService , private UsersService:UsersService) { }

  getCountAssignments(){
    return this.assignmentsService.getAssignmentCount();
  }
  getCountUsers(){
    return this.UsersService.getUserCount();
  }



}
