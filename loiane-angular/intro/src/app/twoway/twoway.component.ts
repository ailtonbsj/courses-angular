import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  name: any = 'One way binding';
  people: any = {
    name: 'Hellen',
    age: 18,
    address: {
      street: 'Rua A',
      number: 1
    }
  }
  nomeDoCurso = 'Angular2+';

  constructor() { }

  ngOnInit(): void {
  }

  onMudouValor(e: Event) {
    console.log(e);

  }

}
