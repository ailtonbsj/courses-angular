import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule } from '@angular/forms';
import { BaseFormComponent } from './base-form/base-form.component';



@NgModule({
  declarations: [FieldControlErrorComponent, ErrorMsgComponent, InputFieldComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    FieldControlErrorComponent, ErrorMsgComponent, InputFieldComponent
  ]
})
export class SharedModule { }
