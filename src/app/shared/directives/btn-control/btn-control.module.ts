import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnControlDirective } from './btn-control.directive';

@NgModule({
  declarations: [BtnControlDirective],
  imports: [CommonModule],
  exports: [BtnControlDirective],
})
export class BtnControlModule {}
