import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlunosDeactivateGuard } from "../guards/alunos-deactivate.guard";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosComponent } from "./alunos.component";

const appRoutes: Routes = [
  {
    path: '', component: AlunosComponent, children: [
      {
        path: 'novo', component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard]
      },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {
}
