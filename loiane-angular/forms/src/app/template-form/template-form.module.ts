import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';

@NgModule({
  declarations: [TemplateFormComponent, FieldControlErrorComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class TemplateFormModule {}
