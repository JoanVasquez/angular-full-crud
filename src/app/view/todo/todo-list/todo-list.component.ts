import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../../service/todo.service';
import { Todo } from 'src/app/model/Todo';
import { headerTable } from './todo.list.config';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  headerTable: object;
  private id: string;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.headerTable = headerTable;
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }
}
