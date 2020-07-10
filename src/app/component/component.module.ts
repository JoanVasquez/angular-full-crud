import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [FormComponent, PaginationComponent, DatatableComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormComponent, DatatableComponent],
})
export class ComponentModule {}
