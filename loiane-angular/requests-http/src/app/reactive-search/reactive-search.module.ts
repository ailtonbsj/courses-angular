import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveSearchRoutingModule } from './reactive-search-routing.module';
import { LibSearchComponent } from './lib-search/lib-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LibSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveSearchRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ReactiveSearchModule { }
