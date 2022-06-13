import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Irmao1Component } from './irmao1/irmao1.component';
import { Irmao2Component } from './irmao2/irmao2.component';
import { ServicoSingletonService } from './servico-singleton.service';



@NgModule({
  declarations: [
    Irmao1Component,
    Irmao2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Irmao1Component, Irmao2Component
  ],
  providers: [ServicoSingletonService]
})
export class ConversaEntreIrmaosModule { }
