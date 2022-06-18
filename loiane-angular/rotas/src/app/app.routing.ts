import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosComponent } from "./cursos/cursos.component";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
