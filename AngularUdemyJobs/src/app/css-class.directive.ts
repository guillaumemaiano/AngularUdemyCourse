import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCssClass]'
})
export class CssClassDirective {
  @Input() set customColor(color: string) {
          this.element.nativeElement.style.backgroundColor = color;
  }

  constructor(private element: ElementRef) { 
  }
}
