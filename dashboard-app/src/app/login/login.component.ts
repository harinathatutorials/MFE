import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  isSubmitted = false;
 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.form.controls; }
  login() {
    console.log(this.form.value);
    this.isSubmitted = true;
    this.router.navigateByUrl('/dashboard');
    localStorage.setItem('loggedUser', JSON.stringify(this.form.value));
  }
}
