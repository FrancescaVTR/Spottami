import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subject, takeUntil } from 'rxjs';

import { RoomsService } from 'src/app/core/services/rooms.service';

import { Room } from 'src/app/core/models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  ROOMS: Room[] = []

  displayedColumns: string[] = ['name', 'work_stations', 'room_type_id'];
  dataSource = new MatTableDataSource<Room>();
  clickedRow = new Set<Room>();

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.getRooms();    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getRooms(): void {
    this.roomsService.getAllRooms()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(response => {
        this.ROOMS = response.data;
        this.dataSource = new MatTableDataSource(this.ROOMS);
      }
    )
  }
}
