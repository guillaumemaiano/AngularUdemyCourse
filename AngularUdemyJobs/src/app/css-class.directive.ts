import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCssClass]'
})
export class CssClassDirective {

  constructor(private element: ElementRef) { 
    element.nativeElement.style.backgroundColor = 'darkGrey';
  }

}
