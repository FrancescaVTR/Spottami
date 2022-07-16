import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ResponseData } from '../models/response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8080/api/login/';
  private JSUrl = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  // Rest API
  login(user: {name: string, password: string} ): Observable<ResponseData<User>> {
    const url = `${this.apiUrl + 'login'}`;
    return this.http.post<ResponseData<User>>(url, user);
  }

  // JSON-SERVER fake Rest API
  loginJS(user: {name: string, password: string} ): Observable<User[]> {
    const url = `${this.JSUrl}`;
    return this.http.get<User[]>(this.JSUrl + `?name=${user.name}&password=${user.password}`);
  }

}

