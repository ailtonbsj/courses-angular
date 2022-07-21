import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Subscription } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { Emitters } from '../shared/emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showLogout = false;
  authSubcription: Subscription = new Subscription;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authSubcription = Emitters.authSubject.subscribe(res => this.showLogout = res);
  }

  ngOnDestroy() {
    console.log('Nav destroyed...');
    this.authSubcription.unsubscribe();
  }

  logout() {
    this.service.logout().subscribe(() => {
      Emitters.authSubject.next(false);
      this.router.navigate(['login']);
    });
  }

}
