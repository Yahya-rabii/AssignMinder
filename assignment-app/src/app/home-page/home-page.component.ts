import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { AssignmentsComponent } from '../assignments/assignments.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule , CarouselComponent  , AssignmentsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  title = 'AssignMinder';

}
