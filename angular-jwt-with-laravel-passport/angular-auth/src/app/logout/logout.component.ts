import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  checkbox: boolean = false;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout(this.checkbox).subscribe({
      next: res => {
        localStorage.removeItem('user');
        this.router.navigate(['']);
      },
      error: e => console.log(e)
    });
  }

}
