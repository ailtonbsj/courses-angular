import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [TemplateFormComponent],
  imports: [CommonModule, SharedModule, FormsModule, HttpClientModule],
})
export class TemplateFormModule { }
