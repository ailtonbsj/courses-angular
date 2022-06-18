import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosComponent } from "./cursos.component";

const appRoutes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {
}
