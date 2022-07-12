import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { delay, forkJoin, map, Observable, of } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8080/api/login/';

  constructor(private http: HttpClient) { }

  login(user: {name: string, password: string} ): Observable<User> {
    const url = `${this.apiUrl + 'login'}`;
    return this.http.post<User>(url, user)
  }

}