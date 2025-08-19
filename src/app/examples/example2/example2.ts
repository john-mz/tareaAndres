import { Component } from '@angular/core';

@Component({
  selector: 'app-example2',
  imports: [],
  templateUrl: './example2.html',
  styleUrl: './example2.css'
})
export class Example2 {
  arreglo: number[] = [];

  capturarDatos(){
    for(let i = 0; i < 10; i++){
      let dato = Number(prompt("ingrese numero"));
      if (dato){
        this.arreglo.push(dato);
      }
    }
  }
}
