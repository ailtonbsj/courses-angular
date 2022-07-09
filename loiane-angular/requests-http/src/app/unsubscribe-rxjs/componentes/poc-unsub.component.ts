import { Component, OnInit } from '@angular/core';
import { EMPTY, Subscription, tap } from 'rxjs';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc-unsub',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-secondary">
    </app-poc-base>
  `
})
export class PocUnsubComponent implements OnInit {

  nome = 'Componente com unsubscribe';
  valor: string = '';

  sub: Subscription[] = [];

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.sub.push(this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
      .subscribe(v => this.valor = v));
  }

  ngOnDestroy() {
    this.sub.map(s => s.unsubscribe());
    console.log(`${this.nome} foi destruido.`);
  }

}
