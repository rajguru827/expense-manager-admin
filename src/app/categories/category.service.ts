import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory, ICategoryAddResponse } from './category';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addCategory(category: ICategory) {
    return this.httpClient.post<ICategoryAddResponse>(environment.apiURL + 'category', category);
  }

  addSubCategory(subCategory) {
    return this.httpClient.post<any>(environment.apiURL + 'subCategory', subCategory);
  }

  getCategories() {
    return this.httpClient.get<any>(environment.apiURL + 'category');
  }
}
