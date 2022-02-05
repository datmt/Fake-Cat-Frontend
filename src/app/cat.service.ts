import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Cat} from './interface/Cat'
@Injectable({
  providedIn: 'root'
})
export class CatService {

  private catUrl = 'http://localhost:9090/cats/';
  constructor(
    private http: HttpClient
  ) { }

  getAll() : Observable<Cat[]> {
    return this.http.get<Cat[]>(this.catUrl + 'list')
  }

  findByName(query: string): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.catUrl + 'search/' + query)
  }
}
