import { Component, OnInit } from '@angular/core';
import { ServicoSingletonService } from '../servico-singleton.service';

@Component({
  selector: 'app-irmao1',
  templateUrl: './irmao1.component.html',
  styleUrls: ['./irmao1.component.css']
})
export class Irmao1Component implements OnInit {

  dados: string[] = ['Dado1'];

  constructor(private service: ServicoSingletonService) { }

  ngOnInit(): void {
  }

  addDado(entrada: string) {
    this.dados.push(entrada);
    this.service.emissor.emit(entrada);
  }

}
