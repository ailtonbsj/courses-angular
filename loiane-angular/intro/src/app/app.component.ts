import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valorPai = 10;
  show = true;

  changeValue() {
    this.valorPai = 5;
  }

  destruir() {
    this.show = false;
  }

}
