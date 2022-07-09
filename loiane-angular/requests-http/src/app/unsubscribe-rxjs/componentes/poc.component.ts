import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc',
  template: `
  <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-danger">
    </app-poc-base>
  `
})
export class PocComponent implements OnInit {

  nome = 'Componente sem unsubscribe';
  valor: string = '';

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
      .subscribe(v => this.valor = v);
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido.`);
  }

}
