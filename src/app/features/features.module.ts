import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesComponent } from './features.component';
import { NewProductsComponent } from './components/new-products/new-products.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { BtnControlModule } from '../shared/directives/btn-control/btn-control.module';

@NgModule({
  declarations: [FeaturesComponent, NewProductsComponent, AllProductsComponent],
  imports: [CommonModule, BtnControlModule],
  exports: [FeaturesComponent],
})
export class FeaturesModule {}
