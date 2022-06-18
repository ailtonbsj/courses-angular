import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlunosRoutingModule } from "./alunos/alunos.routing.module";

import { CursosRoutingModule } from './cursos/cursos.routing.module';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CursosRoutingModule,
    AlunosRoutingModule,
    RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
