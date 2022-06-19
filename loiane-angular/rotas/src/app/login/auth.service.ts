import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginAction: EventEmitter<boolean> = new EventEmitter();
  private isLogged = false;

  constructor() { }

  setLoginStatus(val: boolean) {
    this.isLogged = val;
    this.loginAction.emit(this.isLogged);
  }

  getLoginStatus() {
    return this.isLogged;
  }
}
