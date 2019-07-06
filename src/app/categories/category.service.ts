import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory, ICategoryAddResponse } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addCategory(category: ICategory): Observable<ICategoryAddResponse> {
    return this.httpClient.post<ICategoryAddResponse>("http://localhost:3000/category", category)
  }

  getCategories() {
    return this.httpClient.get<any>("http://localhost:3000/category");
  }
}
