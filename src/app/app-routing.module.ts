import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './view/todo/todo-list/todo-list.component';
import { TodoFormComponent } from './view/todo/todo-form/todo-form.component';

const routes: Routes = [
  { path: 'home', component: TodoListComponent },
  { path: 'new', component: TodoFormComponent },
  { path: 'edit/:id', component: TodoFormComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
