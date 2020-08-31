import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStructuralDirective]'
})
export class CustomStructuralDirectiveDirective {
// Not sure why it doesn't work
  constructor(
    private viewContainer: ViewContainerRef,
    private templateReference: TemplateRef<any>
    ) {}

    @Input() set page( currentPage: number) {
      this.page = currentPage;
    }

    @Input('outlineLatest') set render(latest: number) {
      this.viewContainer.clear();
      // this never displays
      this.viewContainer.createEmbeddedView(this.templateReference, {});
      // if (this.page < latest) {
      // how to inject more html here, such as a div that says "here's the most interesting job I ever did" ?
      //   this.viewContainer.createEmbeddedView(this.templateReference, {});
      // }
      // else {
      //   this.viewContainer.createEmbeddedView(this.templateReference, {});
      // }
    }

}
