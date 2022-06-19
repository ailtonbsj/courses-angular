import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlunosGuard } from "./guards/alunos.guard";
import { AuthGuard } from "./guards/auth.guard";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'cursos',
    loadChildren: () => import('../app/cursos/cursos.module').then(x => x.CursosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('../app/alunos/alunos.module').then(x => x.AlunosModule),
    canActivate: [AuthGuard],
    canActivateChild: [AlunosGuard]
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
