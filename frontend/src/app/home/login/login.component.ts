import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { Subject, takeUntil } from 'rxjs';

import { UsersService } from 'src/app/core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    this.form.reset();
    this.userService.login(userLogging)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('');
    }).unsubscribe();
  }
}
