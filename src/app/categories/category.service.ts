import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addCategory(category): Observable<any> {
    return this.httpClient.post<any>("http://localhost:3000/category", category)
  }
}
