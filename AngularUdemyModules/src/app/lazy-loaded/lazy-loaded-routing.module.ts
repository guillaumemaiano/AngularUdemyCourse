import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadedHomeComponent } from './lazy-loaded-home/lazy-loaded-home.component';

const routes: Routes = [{ path: '', component: LazyLoadedHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LazyLoadedRoutingModule {}