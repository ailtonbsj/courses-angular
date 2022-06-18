import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos = [
    { id: 1, name: 'Aluno 1', email: 'aluno1@gmail.com' },
    { id: 2, name: 'Aluno 2', email: 'aluno2@gmail.com' },
    { id: 3, name: 'Aluno 3', email: 'aluno3@gmail.com' },
    { id: 4, name: 'Aluno 4', email: 'aluno4@gmail.com' }
  ];

  private cachedAluno: any = { id: 0 };

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    if (this.cachedAluno.id != id) {
      console.log('mock from server!');
      this.cachedAluno = { ...this.alunos.find(aluno => aluno.id === id) }
    }
    return this.cachedAluno;
  }

  setAluno(aluno: any) {
    let curr: any = this.alunos.find(val => val.id === aluno.id);
    if (curr == undefined) {
      aluno.id = Math.floor(Math.random() * 10000);
      this.alunos.push(aluno);
    } else {
      curr.name = aluno.name;
      curr.email = aluno.email;
    }
    return "Salvo!";
  }

  constructor() { }
}
