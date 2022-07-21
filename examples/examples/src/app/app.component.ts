import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zippyHasOpened(ev: any) {
    console.log(ev);
  }

  zippyHasClosed(ev: any) {
    console.log(ev);
  }
}
