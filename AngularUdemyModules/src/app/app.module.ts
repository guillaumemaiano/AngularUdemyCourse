import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ElementsModule} from './elements/elements.module';
import {CollectionsModule} from './collections/collections.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    // AppRouting Module last, else it preempts module routing!
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
