import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  terms = true;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(registerForm: NgForm) {
    this.auth.register(registerForm.value).subscribe({
      next: res => {
        alert('Registrado');
        this.router.navigate(['/login']);
      },
      error: e => {
        console.log(e);
        alert(e.error.message);
      }
    });
  }

}
