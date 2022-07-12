import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { Room } from '../models/room';
import { ResponseData } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private apiUrl = 'http://localhost:8080/api/rooms/';
  public roomsList$!: Observable<ResponseData<Room[]>>;

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<ResponseData<Room[]>> {
    if (this.roomsList$ === null) {
      this.roomsList$ = this.http.get<ResponseData<Room[]>>(this.apiUrl + 'rooms');
    }
    return this.roomsList$;
  }
}
