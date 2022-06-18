import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: any[] = [];

  constructor(private alunoService: AlunosService, private route: Router) { }

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
  }

  novoAluno() {
    this.route.navigate(['alunos','novo'])
  }

}
