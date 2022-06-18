import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any = null;
  inscricao: Subscription = Subscription.EMPTY;

  constructor(private activedRoute: ActivatedRoute,
    private alunosService: AlunosService, private route: Router) {
  }

  ngOnInit(): void {
    this.inscricao = this.activedRoute.params.subscribe(param => {
      this.aluno = this.alunosService.getAluno(+param['id']);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editAluno(id: number) {
    this.route.navigate(['alunos', id, 'editar']);
  }

}
