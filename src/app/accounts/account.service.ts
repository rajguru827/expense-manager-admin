import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccountType, IAccountTypeAddResponse } from './account-type';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAccountTypes() {
    return this.httpClient.get<any>(environment.apiURL + 'accountType');
  }

  addAccountType(accounttype: IAccountType): Observable<IAccountTypeAddResponse> {
    return this.httpClient.post<IAccountTypeAddResponse>(environment.apiURL + 'accountType', accounttype);
  }
}
