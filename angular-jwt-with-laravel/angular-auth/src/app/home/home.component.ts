import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Emitters } from '../shared/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  anonymous: User = { id: 0, name: 'Anonymous' };
  user: User = this.anonymous;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User>('http://localhost:8000/api/user', {
      withCredentials: true
    }).subscribe({
      next: user => {
        this.user = user;
        Emitters.authSubject.next(true);
      },
      error: () => {
        this.user = this.anonymous;
        Emitters.authSubject.next(false);
      },
    });
  }

}
