import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonRendu]',
  standalone: true
})
export class NonrenduDirective {

  constructor(el : ElementRef) {

    el.nativeElement.style.color = 'red';
    el.nativeElement.style.fontWeight = 'bold';
    el.nativeElement.style.fontSize = '20px';
    el.nativeElement.style.textDecoration = 'underline';
    el.nativeElement.style.textDecorationColor = 'green';


   }

}
