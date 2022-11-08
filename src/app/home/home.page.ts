import { Component, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { idTema } from '../modelo/tema';
import { ForoService } from '../servicio/foro.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public temas: Array<idTema>=[];
  constructor(private router: Router, private foroApi: ForoService) {}


  public irComentar(){
    this.router.navigate(['comentar']);
  }
  ionViewWillEnter(){
    this.foroApi.ObtenerTemas()
    this.foroApi.listaTemas$.subscribe(datosActuales =>
      {
      this.temas=datosActuales;
      if(this.scroll){
        this.scroll.complete();
      }
    })
  }
}
