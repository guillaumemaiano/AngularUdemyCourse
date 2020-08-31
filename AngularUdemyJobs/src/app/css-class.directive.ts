import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCssClass]'
})
export class CssClassDirective {
  @Input() customColor: String;

  constructor(private element: ElementRef) { 
    // this is not an actual solution, it demonstrates that the constructor runs BEFORE the template sets the property
    setTimeout(() => {
      element.nativeElement.style.backgroundColor = this.customColor || 'darkGrey';
    }, 5000);
  }
}
