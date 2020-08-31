import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CssClassDirective } from './css-class.directive';
import { FontColorClassDirective } from './font-color-class.directive';
import { CustomStructuralDirectiveDirective } from './custom-structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CssClassDirective,
    FontColorClassDirective,
    CustomStructuralDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
