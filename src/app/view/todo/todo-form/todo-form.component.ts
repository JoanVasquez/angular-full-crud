import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  props as propsConfig,
  defaultValues,
  setData,
} from './todoform.config';
import { Todo } from '../../../model/Todo';
import { TodoService } from 'src/app/service/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  props: any;
  data: FormGroup;
  todo: Todo = defaultValues;
  private id: string;
  @Output() saveOrUpdate: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.props = propsConfig;

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.todoService.getTodoById(this.id).subscribe((todo) => {
        this.data = this.fb.group(setData(todo));
      });
    } else {
      this.data = this.fb.group(setData(this.todo));
    }
  }

  onSubmit(): void {
    this.todo = this.data.value;

    if (this.todo.id) {
    } else {
      this.todoService.saveTodo(this.todo);
    }
    this.router.navigateByUrl('home');
  }
}
