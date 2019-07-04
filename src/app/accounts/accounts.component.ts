import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from './account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accountTypeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
    ) {

  }
  ngOnInit() {
    this.createForm();
    this.accountService.getAccountTypes().subscribe(data => {
      console.log(data);
    })
  }

  createForm() {
    this.accountTypeForm = this.fb.group({
      name: [''],
      description: ['']
    });
  }

  onClickSubmit() {
    this.accountService.addAccountType(this.accountTypeForm.value).subscribe(data => {
      console.log(data)
    })
    console.log(this.accountTypeForm.value)
  }

}
