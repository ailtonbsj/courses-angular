import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwowayComponent } from './twoway.component';
import { FormsModule } from '@angular/forms';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { InputPropertyComponent } from './input-property/input-property.component';

@NgModule({
  declarations: [TwowayComponent, OutputPropertyComponent, InputPropertyComponent],
  imports: [CommonModule, FormsModule],
  exports: [TwowayComponent],
})
export class TwowayModule {}
