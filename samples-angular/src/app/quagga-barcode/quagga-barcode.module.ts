import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './scanner/scanner.component';



@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScannerComponent
  ]
})
export class QuaggaBarcodeModule { }
