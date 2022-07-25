import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any = { name: '', email: '', created_at: '' };

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.user().subscribe({
      next: res => this.user = res,
      error: err => this.auth.emitLoginState(false)
    });
  }

}
