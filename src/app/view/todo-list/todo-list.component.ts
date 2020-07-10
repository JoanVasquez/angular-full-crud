import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  data: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.data = this.todoService.getTodos();
    console.log(this.data);
  }
}
