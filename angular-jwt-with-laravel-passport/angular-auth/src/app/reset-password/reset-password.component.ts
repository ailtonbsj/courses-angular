import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token = '';

  constructor(private route: ActivatedRoute, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (p: any) => this.token = p.token,
      error: e => console.error(e)
    });
  }

  onSubmit(form: NgForm) {
    this.auth.reset(form.value.password, form.value.password_confirmation, this.token)
      .subscribe({
        next: (res: any) => alert(res.message),
        error: e => alert(e.error.message)
      });
  }

}
