import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemaPageRoutingModule } from './tema-routing.module';

import { TemaPage } from './tema.page';
import { HttpClientModule } from '@angular/common/http';
import { ForoService } from '../servicio/foro.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    TemaPageRoutingModule
  ],
  declarations: [TemaPage],
  providers:[ForoService]
})
export class TemaPageModule {}
