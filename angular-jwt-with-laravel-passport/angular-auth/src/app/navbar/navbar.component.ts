import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged = false;
  isLoggedSub: Subscription = new Subscription;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedSub = this.auth.getLoginSubject().subscribe(val => this.isLogged = val);
  }

  ngOnDestroy() {
    this.isLoggedSub.unsubscribe();
  }

}
