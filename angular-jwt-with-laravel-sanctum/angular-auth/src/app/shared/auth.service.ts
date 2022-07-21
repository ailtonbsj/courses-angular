import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable()
export class AuthService {

  readonly API = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.API}register`, user);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.API}logout`, {}, { withCredentials: true });
  }

}
