import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DexieTodoModule } from './dexie-todo/dexie-todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DexieTodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
