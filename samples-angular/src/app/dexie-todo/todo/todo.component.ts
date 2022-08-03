import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from '../db';
import { TodoList } from '../todo-list';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoLists$ = liveQuery(() => db.todoLists.toArray());
  listName = 'My new list';

  constructor() {
  }

  ngOnInit(): void {
  }

  async addNewList() {
    await db.todoLists.add({
      title: this.listName
    });
  }

  identifyList(index: number, list: TodoList) {
    return `${list.id}${list.title}`;
  }

}
