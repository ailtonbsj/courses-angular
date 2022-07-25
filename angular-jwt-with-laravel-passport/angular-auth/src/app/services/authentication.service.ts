import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly API = 'http://localhost:8000/api';
  private isLoggedIn = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  reset(password: string, password_confirmation: string, token: string) {
    return this.http.post(`${this.API}/reset`, {
      password, password_confirmation, token
    }).pipe(take(1));
  }

  forgot(email: string) {
    return this.http.post(`${this.API}/forgot`, { email }).pipe(take(1));
  }

  register(user: any) {
    return this.http.post(`${this.API}/register`, user).pipe(take(1));
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:8000/api/login', { email, password }).pipe(
      take(1),
      tap(() => this.emitLoginState(true))
    );
  }

  emitLoginState(state: boolean) {
    this.isLoggedIn.next(state);
  }

  getLoginSubject(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  getCachedHeader() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return new HttpHeaders({
      Authorization: `Bearer ${user.token}`
    });
  }

  logout(allDevices: boolean) {
    return this.http.post(`${this.API}/logout`, { allDevices }, { headers: this.getCachedHeader() })
      .pipe(
        take(1),
        tap(() => this.emitLoginState(false))
      );
  }

  user() {
    return this.http.get(`${this.API}/user`, { headers: this.getCachedHeader() }).pipe(
      take(1),
      tap(() => this.emitLoginState(true))
    );
  }

}
