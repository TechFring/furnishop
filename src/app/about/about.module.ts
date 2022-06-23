import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { BtnControlModule } from '../shared/directives/btn-control/btn-control.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, BtnControlModule],
  exports: [AboutComponent],
})
export class AboutModule {}
