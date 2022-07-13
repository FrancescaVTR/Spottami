import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subject, takeUntil } from 'rxjs';

import { RoomsService } from '../core/services/rooms.service';

import { RoomBooking } from '../core/models/roomBooking';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  userID!: number;
  BOOKINGS: RoomBooking[] = [];

  displayedColumns: string[] = ['room_id', 'booking_date', 'start_time', 'end_time', 'actions'];
  dataSource = new MatTableDataSource<RoomBooking>();
  clickedRow = new Set<RoomBooking>();

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private authService: AuthService,
    private roomsService: RoomsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authService.id$.pipe(
      takeUntil(this.destroy$)
    ).subscribe( (id) => {
      if (id) {
        this.userID = id;
        this.getBookings(id)
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getBookings(id: number): void {
    this.roomsService.getBookingsByID(id)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(response => {
        this.BOOKINGS = response.data;
        console.log(this.BOOKINGS);
        this.dataSource = new MatTableDataSource(this.BOOKINGS);
      }
    )
  }

  deleteBooking(id: number): void {
    this.roomsService.deleteBookingByID(id)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(() => this.getBookings(this.userID));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
