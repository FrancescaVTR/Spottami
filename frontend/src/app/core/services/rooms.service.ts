import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private apiUrl = 'http://localhost:8080/api/rooms/';
  private roomsList$!: Observable<Room[]>;

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    if (this.roomsList$ === null) {
      this.roomsList$ = this.http.get<Room[]>(this.apiUrl + 'rooms');
    }
    return this.roomsList$;
  }
}
