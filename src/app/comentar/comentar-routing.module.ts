import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ForoService } from '../servicio/foro.service';

import { ComentarPage } from './comentar.page';

const routes: Routes = [
  {
    path: '',
    component: ComentarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule , ReactiveFormsModule],
  providers:[ForoService]
})
export class ComentarPageRoutingModule {}
