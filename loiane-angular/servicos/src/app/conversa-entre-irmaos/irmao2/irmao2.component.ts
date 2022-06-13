import { Component, OnInit } from '@angular/core';
import { ServicoSingletonService } from '../servico-singleton.service';

@Component({
  selector: 'app-irmao2',
  templateUrl: './irmao2.component.html',
  styleUrls: ['./irmao2.component.css']
})
export class Irmao2Component implements OnInit {

  dados: string[] = ['Dado2'];

  constructor(private service: ServicoSingletonService) { }

  ngOnInit(): void {
    this.service.emissor.subscribe(dado => this.dados.push(dado));
  }

}
