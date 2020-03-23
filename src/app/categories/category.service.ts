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

  addCategory(category: ICategory) {
    return this.httpClient.post<ICategoryAddResponse>('http://localhost:3000/category', category);
  }

  addSubCategory(subCategory) {
    return this.httpClient.post<any>('http://localhost:3000/subCategory', subCategory);
  }

  getCategories() {
    return this.httpClient.get<any>('http://localhost:3000/category');
  }
}
