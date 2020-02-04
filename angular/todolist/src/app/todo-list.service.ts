import { Injectable } from '@angular/core';
import { Todo, Todos } from './todo-list/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todolist: Todos;

  constructor() {
    this.todolist = new Array();
  }

  getAll() {
    return this.todolist;
  }

  get(id: number) {
    let todo: Todo;
    this.todolist.filter(el => {
      if (el.id === id) {
        todo = el;
      }
    });
    return todo;
  }

  getNewId() {
    let max: number = 0;
    this.todolist.forEach(element => {
      if (element.id > max) {
        max = element.id;
      }
    });
    return max + 1;
  }

  add(todo: Todo) {
    let newId: number = this.getNewId();
    todo.id = newId;
    this.todolist.push(todo);
  }

  edit(todo: Todo) {
    this.get(todo.id).label = todo.label;
  }

  delete(id: number) {
    this.todolist.splice(this.todolist.indexOf(this.get(id)), 1);
  }
}
