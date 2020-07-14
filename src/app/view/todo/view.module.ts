import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ComponentModule } from '../../component/component.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [TodoFormComponent, TodoListComponent],
  imports: [CommonModule, ComponentModule],
  exports: [TodoFormComponent, TodoListComponent],
})
export class ViewModule {}
