import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CssClassDirective } from './css-class.directive';
import { FontColorClassDirective } from './font-color-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    CssClassDirective,
    FontColorClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
