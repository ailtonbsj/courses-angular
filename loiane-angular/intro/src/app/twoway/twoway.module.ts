import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwowayComponent } from './twoway.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TwowayComponent],
  imports: [CommonModule, FormsModule],
  exports: [TwowayComponent],
})
export class TwowayModule {}
