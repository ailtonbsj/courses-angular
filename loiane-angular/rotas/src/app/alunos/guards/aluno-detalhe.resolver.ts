import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { Aluno } from "../aluno";
import { AlunosService } from "../alunos.service";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

  inscricao: Subscription = Subscription.EMPTY;

  constructor(private alunoService: AlunosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Aluno | Observable<Aluno> | Promise<Aluno> {

    console.log('Resolve AlunoDetalhe');
    let id: number = +route.params['id'];
    return this.alunoService.getAluno(id);

  }
}
