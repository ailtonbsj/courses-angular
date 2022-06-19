import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {login: '', senha: ''};

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    if(this.usuario.login == 'admin' && this.usuario.senha == 'admin') {
      this.auth.setLoginStatus(true);
      this.router.navigate(['']);
    } else {
      this.auth.setLoginStatus(false);
      alert("Login inválido!");
    }
  }

}
