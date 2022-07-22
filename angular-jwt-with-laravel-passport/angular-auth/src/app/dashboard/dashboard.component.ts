import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any = { name: '', email: '', created_at: '' };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${user.token}`
    });
    this.http.get('http://localhost:8000/api/user', {
      headers: headers
    }).subscribe({
      next: res => this.user = res,
      error: err => console.log(err)
    });
  }

}
