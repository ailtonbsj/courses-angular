import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript and Data Structures',
    rating: 4.5435353,
    paginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }

  livros: string[] = ['Angular 2', 'Java'];
  filtro: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);

  }

}
