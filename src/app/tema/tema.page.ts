import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ForoService } from '../servicio/foro.service';
@Component({
  selector: 'app-tema',
  templateUrl: './tema.page.html',
  styleUrls: ['./tema.page.scss'],
})
export class TemaPage implements OnInit {
  public formulario: FormGroup;
  public imagenCargando = false;
  public imagenBase64 = '';
  constructor(private builder: FormBuilder, private ForoApi: ForoService, private router: Router) {

    this.formulario = this.builder.group({
      titulo: ['', [Validators.required]],
      autor: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    })
  }

  public campo(control: string) {
    return this.formulario.get(control);
  }

  public subirImagen(e: Event){
    this.imagenCargando= true;
    const elemento= e.target as HTMLInputElement;
    const archivo= elemento.files[0];
    console.log(archivo);

    const reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload=()=>{
      this.imagenCargando= false;
      console.log('Cargana Terminada');
      this.imagenBase64= reader.result as string;
    }
  }

  public guardarImagen(): void {
    if (this.formulario.invalid || this.imagenCargando) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.ForoApi.agregarTema({
      ...this.formulario.value,
      imagen: this.imagenBase64
    })
      .subscribe(resultado => {
        if (resultado) {
          this.formulario.reset();
          this.formulario.updateValueAndValidity();
          alert('Imagen Guardada!');
          this.router.navigate(['']);
        }
      })
  }
  ngOnInit() {
  }
}





