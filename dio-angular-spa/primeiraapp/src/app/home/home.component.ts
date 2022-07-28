import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  variavel = 'Dado em variável';
  cor = 'blue';
  varParaTwoWay = 'valor';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    alert('O texto foi clicado!');
  }

}
