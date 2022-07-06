import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DropdownService } from '../shared/services/dropdown.service';
import { VerificaEmailService } from './services/verifica-email.service';

@NgModule({
  declarations: [DataFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DropdownService,
    VerificaEmailService
  ]
})
export class DataFormModule { }
