import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

import { UsersService } from 'src/app/core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  hide = true;

  form!: FormGroup;
  name!: FormControl;
  password!: FormControl;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.form = this.fb.group({
      name: this.name,
      password: this.password
    })
  }

  onSubmit(): void {
    const userLogging = this.form.value;
    const user$ = this.userService.login(userLogging);
    user$.pipe(
      takeUntil(this.destroy$)
      )
      .subscribe(response => {
        if (response.data) {
          localStorage.setItem('auth', JSON.stringify(response.data));
          this.router.navigateByUrl('/stanze');
        } else {
          console.error(response.error);
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
