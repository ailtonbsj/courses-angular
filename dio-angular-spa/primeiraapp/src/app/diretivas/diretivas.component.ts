import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';

@Component({
  selector: 'spa-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  alunos: Aluno[] = [];
  displayedColumns: string[] = ['name', 'grade', 'year'];
  isShowTable = true;

  constructor() { }

  ngOnInit(): void {
    this.alunos = [
      { name: "João", grade: 10, year: 1 },
      { name: "José", grade: 9, year: 2 },
      { name: "Silva", grade: 10, year: 3 },
    ];
  }

  showTable() {
    this.isShowTable = !this.isShowTable;
  }

}
