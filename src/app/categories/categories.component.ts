import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from './category.service';
import { ICategory } from './category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  
  categoryForm: FormGroup;
  categories: ICategory[];

  constructor(    
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getCategories();
  }

  createForm() {
    this.categoryForm = this.fb.group({
      name: [''],
      description: [''],
      type: ['']
    });
  }

  onClickSubmit() {
    this.categoryService.addCategory(this.categoryForm.value).subscribe(data => {
      this.categories.push(data.category);
      this.categoryForm.reset();
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data.categories;
    });
  }
}
