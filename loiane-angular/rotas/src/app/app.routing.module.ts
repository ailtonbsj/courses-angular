import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'cursos', loadChildren:
      () => import('../app/cursos/cursos.module').then(x => x.CursosModule)
  },
  {
    path: 'alunos', loadChildren:
      () => import('../app/alunos/alunos.module').then(x => x.AlunosModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
