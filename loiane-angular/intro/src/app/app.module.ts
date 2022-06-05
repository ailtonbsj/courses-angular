import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent, FirstComponent, SecondComponent, DataBindingComponent
  ],
  imports: [
    BrowserModule, CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
