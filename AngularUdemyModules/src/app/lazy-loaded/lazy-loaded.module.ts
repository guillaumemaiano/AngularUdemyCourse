import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedHomeComponent } from './lazy-loaded-home/lazy-loaded-home.component';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '',
                          component: LazyLoadedHomeComponent}];

@NgModule({
  declarations: [LazyLoadedHomeComponent],
  imports: [
    CommonModule
  ]
})
export class LazyLoadedModule { }
