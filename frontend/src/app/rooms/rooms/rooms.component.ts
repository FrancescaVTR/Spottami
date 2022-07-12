import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Room } from 'src/app/core/models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  ROOMS: Room[] = [
    {
      id: 1,
      name: 'Giallo',
      work_stations: 4,
      type: 'Meeting'
    },
    {
      id: 2,
      name: 'Blu',
      work_stations: 8,
      type: 'Meeting'
    },
    {
      id: 3,
      name: 'Rosso',
      work_stations: 10,
      type: 'Meeting'
    },
    {
      id: 4,
      name: 'Verde',
      work_stations: 5,
      type: 'Meeting'
    }
  ]

  displayedColumns: string[] = ['name', 'work_stations', 'type'];
  dataSource = new MatTableDataSource(this.ROOMS)
  clickedRow = new Set<Room>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    // this.getRooms();    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getRooms(): void {
    // Chiamata tramite servizio
  }

  clickRoom(): void {
    console.log('click');
    console.log(this.clickedRow);
  }
}
