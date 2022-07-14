import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'upload-file' },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(x => x.CursosModule),
  },
  {
    path: 'rxjs-poc',
    loadChildren: () => import('./unsubscribe-rxjs/unsubscribe-rxjs.module').then(x => x.UnsubscribeRxjsModule),
  },
  {
    path: 'upload-file',
    loadChildren: () => import('./upload-file/upload-file.module').then(x => x.UploadFileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
