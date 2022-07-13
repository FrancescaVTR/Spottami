import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { Room } from '../models/room';
import { ResponseData } from '../models/response';
import { RoomBooking } from '../models/roomBooking';
import { BookSearch } from '../models/bookSearch';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private apiUrl = 'http://localhost:8080/api/rooms/';
  private bookingAPIUrl = 'http://localhost:8080/api/booking/'
  public roomsList$!: Observable<ResponseData<Room[]>>;

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<ResponseData<Room[]>> {
    if (this.roomsList$ === undefined) {
      this.roomsList$ = this.http.get<ResponseData<Room[]>>(this.apiUrl + 'rooms');
    }
    return this.roomsList$;
  }

  searchBookings(search: BookSearch): Observable<ResponseData<RoomBooking[]>> {
    const url = `${this.bookingAPIUrl + 'booking'}`;
    return this.http.post<ResponseData<RoomBooking[]>>(url, search);
  }

  addBooking(booking: RoomBooking): Observable<RoomBooking> {
    const url = `${this.bookingAPIUrl + 'newbooking'}`;
    return this.http.post<RoomBooking>(url, booking)
  }

  getBookingsByID(id: number): Observable<ResponseData<RoomBooking[]>> {
    return this.http.get<ResponseData<RoomBooking[]>>(`${this.bookingAPIUrl + 'booking'}/?id=${id}`);
  }
}
