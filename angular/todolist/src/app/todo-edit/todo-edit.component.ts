import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-list/todo.model';
import { TodoListService } from '../todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: Todo;

  constructor(private todolistService: TodoListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      this.todo = new Todo(0, '');
    } else {
      this.todo = this.todolistService.get(parseInt(id));
    }
  }

  addTodo() {
    if (this.todo.id === 0) {
      this.todo.id = this.todolistService.getNewId();
      this.todolistService.add(this.todo);
    } else {
      this.todolistService.edit(this.todo);
    }

    this.router.navigate(['/list']);
  }

}
