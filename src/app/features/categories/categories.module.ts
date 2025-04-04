import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    CategoriesComponent
  ],
  declarations: []
})
export class CategoriesModule { }