import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { Output, EventEmitter } from '@angular/core';


import { Assignment } from '../../models/assignment.model';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();
  nomDevoir : string = '';
  dateDeRendu : Date = new Date();

  onSubmit() {
    console.log("Ajout de assignment " + this.nomDevoir);

    const newAssigment : Assignment = new Assignment();
    newAssigment.Nom = this.nomDevoir;
    newAssigment.DateDeRendu = this.dateDeRendu;
    newAssigment.Rendu = false;

    //this.assignments.push(newAssigment);
    this.nouvelAssignment.emit(newAssigment);
    // set the form visible to true the formvisible is in the assignments.component.ts
    // this.formvisible = false;
        
  }
}