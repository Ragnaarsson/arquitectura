import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarPageRoutingModule } from './comentar-routing.module';

import { ComentarPage } from './comentar.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    ComentarPageRoutingModule
  ],
  declarations: [ComentarPage]
})
export class ComentarPageModule {}
