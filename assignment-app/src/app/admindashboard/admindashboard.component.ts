import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component'
import { UsertableComponent } from './usertable/usertable.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [CommonModule , CardsComponent , UsertableComponent , CarouselComponent],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {



  


}
