import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string | null = null;

  auth$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) {
      const auth = localStorage.getItem('auth');
      if (auth)
        this.auth$.next(JSON.parse(auth))
    }

  logout(): void {
    this.auth$.next(null);
    localStorage.removeItem('auth');
    this.router.navigateByUrl('login');
  }

  get isLogged$(): Observable<boolean> {
    return this.auth$.pipe(
      map(value => !!value)
    );
  }

  get id$(): Observable<number | undefined> {
    return this.auth$.pipe(
      map(auth => auth?.id)
    );
  }
}