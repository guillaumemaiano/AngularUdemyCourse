import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFontColorClass]'
})
export class FontColorClassDirective {

  constructor(private element: ElementRef) { }

  @Input('appFontColorClass') set fontColor(color: string) {
    this.element.nativeElement.style.color = color;
  }
}
