import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TwowayModule } from './twoway/twoway.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DataBindingComponent,
    EventBindingComponent,
  ],
  imports: [BrowserModule, CursosModule, TwowayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
