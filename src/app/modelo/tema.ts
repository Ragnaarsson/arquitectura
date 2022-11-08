export interface Tema {
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

export interface idTema extends Tema{
  id: number;

}
