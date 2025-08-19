import { Component } from '@angular/core';

@Component({
  selector: 'app-example7',
  imports: [],
  templateUrl: './example7.html',
  styleUrl: './example7.css'
})

export class Example7 {
  arreglo: string[] = [];

  capturarDatos(){
    if (this.arreglo.length > 0){
      this.arreglo = [];
    }
    for(let i = 0; i < 5; i++){
      let dato = prompt("ingrese nombre de 5 elementos cualquiera");
      if (dato){
        this.arreglo.push(dato);
      }
    }
  }
}
