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
  headerTable: object;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.headerTable = {
      id: 'ID',
      userId: 'User Id',
      title: 'Title',
      completed: 'Completed',
      actions: {
        edit: 'Edit',
        delete: 'Delete',
      },
    };
    this.data = this.todoService.getTodos();
  }
}
