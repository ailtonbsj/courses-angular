import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosComponent } from "./cursos.component";

const appRoutes: Routes = [
  { path: '', component: CursosComponent },
  { path: ':id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {
}
