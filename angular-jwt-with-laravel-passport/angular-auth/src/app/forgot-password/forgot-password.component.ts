import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.auth.forgot(form.value.email).subscribe({
      next: (res: any) => {
        alert(res.message)
      },
      error: e => alert(e.error.message)

    });
  }

}
