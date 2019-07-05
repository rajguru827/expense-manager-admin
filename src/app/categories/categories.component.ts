import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  
  categoryForm: FormGroup;

  constructor(    
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.createForm();
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
      console.log(data)
    })
    console.log(this.categoryForm.value)
  }
}
