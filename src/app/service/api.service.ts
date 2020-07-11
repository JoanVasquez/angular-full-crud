import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ApiService {
  private api: string = environment.api_server;

  constructor(private http: HttpClient) {}

  public request(
    method: string,
    endPoint: string,
    headers: HttpHeaders,
    params?: HttpParams,
    body?: string
  ): any {
    const url: string = `${this.api}/${endPoint}`;
    return this.http.request(method, url, {
      headers,
      params,
      body,
    });
  }
}
