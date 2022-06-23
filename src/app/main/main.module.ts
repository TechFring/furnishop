import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { HeaderModule } from '../header/header.module';
import { HomeModule } from '../home/home.module';
import { FeaturesModule } from '../features/features.module';
import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    HomeModule,
    FeaturesModule,
    AboutModule,
    ContactModule,
    FooterModule
  ],
  exports: [MainComponent],
})
export class MainModule {}
