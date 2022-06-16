import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

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
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() == '') {
      return this.livros;
    }
    return this.livros.filter(v => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) return true;
      else return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono.'), 2000);
  });

  valorAsync2 = interval(4000).pipe(map(valor => 'Valor assíncrono 2.'))

}
