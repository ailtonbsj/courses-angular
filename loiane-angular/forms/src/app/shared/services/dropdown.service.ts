import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadosBr } from '../models/estados-br';

@Injectable()
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBR(): Observable<EstadosBr[]> {
    return this.http.get<EstadosBr[]>('assets/dados/estadosbr.json');
  }

  getCargos(){
    return [
      { nome: 'Dev', sigla: 'Jr', descricao: 'Dev Junior'},
      { nome: 'Dev', sigla: 'Pl', descricao: 'Dev Pleno'},
      { nome: 'Dev', sigla: 'Sr', descricao: 'Dev Senior'},
    ];
  }

  getTecnologias() {
    return [
      { nome: 'angular', desc: 'Angular' },
      { nome: 'spring', desc: 'Spring Boot' },
      { nome: 'vue', desc: 'VueJS' },
      { nome: 'nest', desc: 'NestJS' },
    ]
  }

  getNewsletter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Nao' }
    ]
  }

}
