import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

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
    private fb: FormBuilder
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
    const { name, password } = this.form.value;
    console.log(this.form.value)
    // this.login(username, password);
  }
}
