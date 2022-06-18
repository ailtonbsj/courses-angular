import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      { id: 1, name: 'Angular'},
      { id: 2, name: 'Spring' }
    ];
  }

  getCurso(id: number) {
    return this.getCursos().find(curso => curso.id == id);
  }

  constructor() { }
}
