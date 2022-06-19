import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';
  idCurso: number = 0;
  showMenuBar = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.loginAction.subscribe(val => this.showMenuBar = val);
  }
}
