import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';



@NgModule({
  declarations: [FieldControlErrorComponent, ErrorMsgComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FieldControlErrorComponent, ErrorMsgComponent
  ]
})
export class SharedModule { }
