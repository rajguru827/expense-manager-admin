import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccountType, IAccountTypeAddResponse } from './account-type';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAccountTypes() {
    return this.httpClient.get<any>('http://localhost:3000/accountType');
  }

  addAccountType(accounttype: IAccountType): Observable<IAccountTypeAddResponse> {
    return this.httpClient.post<IAccountTypeAddResponse>('http://localhost:3000/accountType', accounttype);
  }
}
