import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/Todo';
import { PaginationInstance } from 'ngx-pagination';
import { paginationInstance } from './pagination.config';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  private objectKeys = Object.keys;
  private objectValues = Object.values;
  @Input() data: Observable<Todo[]>;
  @Input() action: boolean;
  @Input() headerTable: object;

  paginationConfig: PaginationInstance;

  constructor() {}

  ngOnInit(): void {
    this.paginationConfig = paginationInstance;
  }
}
