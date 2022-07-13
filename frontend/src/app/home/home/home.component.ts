import { Component } from '@angular/core';

import { AuthService } from 'src/app/core/auth/auth.service';

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
export class HomeComponent {

  appTitle: string = 'Spottami'

  links: Link[] = [
    { routerLink: '', name: 'Homepage', icon: 'home' },
    { routerLink: '/stanze', name: 'Stanze', icon: 'meeting_room' },
    { routerLink: '/profilo', name: 'Profilo', icon: 'person' }
  ]

  constructor(public authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }

}
