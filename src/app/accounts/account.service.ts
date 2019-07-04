import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAccountTypes() {
    return this.httpClient.get<any>("http://localhost:3000/accountType")
  }
  
  addAccountType(accounttype): Observable<any> {
    return this.httpClient.post<any>("http://localhost:3000/accountType", accounttype)
  }
}
