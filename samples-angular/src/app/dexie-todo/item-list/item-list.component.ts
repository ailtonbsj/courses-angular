import { Component, Input, OnInit } from '@angular/core';
import { liveQuery, Observable } from 'dexie';
import { db } from '../db';
import { TodoList } from '../todo-list';

@Component({
  selector: 'itemlist',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() todoList: TodoList = <TodoList>{};
  itemName = 'My new item';
  todoItems$ = liveQuery(() => this.listTodoItems())

  async listTodoItems() {
    return await db.todoItems
      .where({
        todoListId: this.todoList.id,
      })
      .toArray();
  }

  async addItem() {
    await db.todoItems.add({
      title: this.itemName,
      todoListId: this.todoList.id || 0
    });
  }

  async editItem(id: number, text: string) {
    if (id !== -1) {
      let newText = prompt('Edite seu texto:', text);
      if (newText) {
        await db.todoItems.put({ title: newText, todoListId: <number>this.todoList.id, id: id }, id);
      }
    }
  }

  async removeItem(id: number) {
    if (id !== -1) {
      await db.todoItems.delete(id);
    }
  }

  async editList(id: number, text: string) {
    if (id !== -1) {
      let newText = prompt('Edite seu texto:', text);
      if (newText) {
        await db.todoLists.put({ title: newText, id: id }, id);
      }
    }
  }

  async removeList(id: number) {
    if (id !== -1) {
      const ids = await db.todoItems.where('todoListId').equals(id).primaryKeys();
      await db.todoItems.bulkDelete(ids);
      await db.todoLists.delete(id);
    }
  }
}
