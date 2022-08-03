import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';



@NgModule({
  declarations: [
    TodoComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoComponent
  ]
})
export class DexieTodoModule { }
