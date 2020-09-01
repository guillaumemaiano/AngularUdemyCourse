import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedHomeComponent } from './lazy-loaded-home/lazy-loaded-home.component';
import { LazyLoadedRoutingModule} from './lazy-loaded-routing.module';


@NgModule({
  declarations: [LazyLoadedHomeComponent],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule
  ]
})
export class LazyLoadedModule { }
