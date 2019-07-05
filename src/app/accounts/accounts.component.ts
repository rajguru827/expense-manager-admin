import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from './account.service';
import { IAccountType } from './account-type';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  
  accountTypeForm: FormGroup;
  accountTypes: IAccountType[];

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
    ) {

  }
  ngOnInit() {
    this.createForm();
    this.accountService.getAccountTypes().subscribe(data => {
      this.accountTypes = data.accountTypes;
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
      this.accountTypes.push(data.accountType)
    })
  }

}
