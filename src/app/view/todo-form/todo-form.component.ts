import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  props as propsConfig,
  defaultValues,
  setData,
} from './todoform.config';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  props: any;
  data: FormGroup;
  todo: Todo = defaultValues;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.data = this.fb.group(setData(this.todo));
    this.props = propsConfig;
  }

  onSubmit(): void {
    this.todo = this.data.value;
    console.log('Data', this.todo);
  }
}
