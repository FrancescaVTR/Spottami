import { Component, OnInit } from '@angular/core';

export interface Link {
  routerLink: string,
  name: string,
  icon: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent implements OnInit {

  appTitle: string = 'Spottami'

  links: Link[] = [
    { routerLink: '', name: 'Homepage', icon: 'home' },
    { routerLink: '/stanze', name: 'Stanze', icon: 'meeting_room' }
  ]

  constructor() { }

  ngOnInit(): void { }

}
