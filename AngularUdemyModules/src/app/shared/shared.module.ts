import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { BetterDividerComponent } from './better-divider/better-divider.component';



@NgModule({
  declarations: [DividerComponent, BetterDividerComponent],
  imports: [
    CommonModule
  ], exports: [
    DividerComponent,
    BetterDividerComponent
  ]
})
export class SharedModule { }
