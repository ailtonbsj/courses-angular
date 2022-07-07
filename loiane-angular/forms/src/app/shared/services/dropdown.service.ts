import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Cidade } from '../models/cidade';
import { EstadoBr } from '../models/estado-br';

@Injectable()
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBR(): Observable<EstadoBr[]> {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCidades(idUF: number) {
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      map(cidades => cidades.filter(cidade => cidade.estado == idUF)),
    );
  }

  getCargos() {
    return [
      { nome: 'Dev', sigla: 'Jr', descricao: 'Dev Junior' },
      { nome: 'Dev', sigla: 'Pl', descricao: 'Dev Pleno' },
      { nome: 'Dev', sigla: 'Sr', descricao: 'Dev Senior' },
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
