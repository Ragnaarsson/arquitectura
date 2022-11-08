import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comentario, idComentario } from '../modelo/comentario';
import { idTema, Tema } from '../modelo/tema';
@Injectable({
  providedIn: 'root'
})
export class ForoService {
  public urlTema="http://localhost:3000/temas";
  public urlComentario="http://localhost:3000/comentarios";
  private paginaActual = 1;
  private comLista = new BehaviorSubject <Array<idTema>>([]);
  public listaTemas$ = this.comLista.asObservable();
  private comLista2= new BehaviorSubject <Array<idComentario>>([]);
  public listaComentario$ = this.comLista2.asObservable();
  constructor(private http: HttpClient) {
  }

  public agregarTema(tema: Tema){
    return this.http.post(this.urlTema,tema,{
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
  }
  public ObtenerTemas(){
    return this.http.get<Array<idTema>>(`${this.urlTema}?
    _page=1`)
    .subscribe(datos =>{
      this.paginaActual= this.paginaActual+1;
      this.comLista.next(datos);
      console.log(this.comLista);
    });
  }

  public ObtenerComentario(){
    return this.http.get<Array<idComentario>>(`${this.urlComentario}?
    _page=1`)
    .subscribe(datos =>{
      this.paginaActual= this.paginaActual+1;
      this.comLista2.next(datos);
      console.log(this.comLista);
    });
  }


public agregarComentario(coment: Comentario){
  return this.http.post(this.urlComentario,coment,{
    headers:{
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
}

}
