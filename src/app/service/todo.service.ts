import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiService: ApiService;
  private header: HttpHeaders;
  private params: HttpParams;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.params = new HttpParams();
    this.apiService = new ApiService(http);
  }

  public getTodos(): Observable<Todo[]> {
    return this.apiService.request('GET', 'todos', this.header);
  }

  public getTodoById(id: string): Observable<Todo> {
    return this.apiService.request('GET', `todos/${id}`, this.header);
  }

  public saveTodo(todo: Todo): Observable<Todo> {
    return this.apiService.request('POST', 'todos', this.header, null, todo);
  }
}
