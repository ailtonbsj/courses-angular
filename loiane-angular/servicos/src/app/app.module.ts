import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversaEntreIrmaosModule } from './conversa-entre-irmaos/conversa-entre-irmaos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    ConversaEntreIrmaosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
