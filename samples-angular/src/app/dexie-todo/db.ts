import Dexie, { Table } from "dexie";
import { TodoItem } from "./todo-item";
import { TodoList } from "./todo-list";

export class AppDB extends Dexie {
  todoItems!: Table<TodoItem, number>;
  todoLists!: Table<TodoList, number>;

  constructor() {
    super('ngdexieliveQuery'); // DB Name
    this.version(1).stores({
      todoLists: '++id',
      todoItems: '++id, todoListId'
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    const todoListId = await db.todoLists.add({
      title: 'To Do Today'
    });

    await db.todoItems.bulkAdd([
      {
        todoListId,
        title: 'Feed the birds',
      },
      {
        todoListId,
        title: 'Watch a movie',
      },
      {
        todoListId,
        title: 'Have some sleep',
      },
    ]);
  }
}

export const db = new AppDB();
