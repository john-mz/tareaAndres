import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  imports: [],
  templateUrl: './example1.html',
  styleUrl: './example1.css'
})
export class Example1 {
  arreglo: string[] = [];

  capturarDatos(){
    for(let i = 0; i < 5; i++){
      let dato = prompt("ingrese nombre");
      if (dato){
        this.arreglo.push(dato);
      }
    }
  }
}
