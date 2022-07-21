import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe({
      next: res => this.router.navigate(['home']),
      error: err => alert(err.message)
    });
  }

}
