import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwowayComponent } from './twoway.component';
import { FormsModule } from '@angular/forms';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [TwowayComponent, OutputPropertyComponent],
  imports: [CommonModule, FormsModule],
  exports: [TwowayComponent],
})
export class TwowayModule {}
