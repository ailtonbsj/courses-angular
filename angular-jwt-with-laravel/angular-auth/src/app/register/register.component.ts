import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: AuthService) {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.service.register(this.form.getRawValue()).subscribe({
      next: () => {
        alert('Cadastrado com sucesso!')
        this.router.navigate(['login'])
      },
      error: err => alert(err.message)
    });
  }

}
