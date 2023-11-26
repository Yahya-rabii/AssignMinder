import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AssignmentsComponent } from './assignments/assignments.component'; 
import {MatDividerModule} from '@angular/material/divider';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent , MatButtonModule , AssignmentsComponent , MatDividerModule , NavBarComponent  , SideBarComponent , CarouselComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'


})
export class AppComponent {
  title = 'assignment-app';
  ngOnInit(): void {
    initFlowbite();
  }

}
