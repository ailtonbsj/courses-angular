import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.http.post('http://localhost:8000/api/login', {
      email: email, password: password
    }).subscribe({
      next: res => {
        sessionStorage.setItem('user', JSON.stringify(res))
        this.router.navigate(['/dashboard']);
      },
      error: err => console.log(err)
    });
  }

}
