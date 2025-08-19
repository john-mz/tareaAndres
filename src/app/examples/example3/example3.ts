import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from './producto.model';

@Component({
  selector: 'app-example3',
  imports: [FormsModule],
  templateUrl: './example3.html',
  styleUrl: './example3.css'
})
export class Example3 {
  enteredNombre: string = "";
  enteredPrecio!: number;
  arreglo: Producto[] = [];

  onSubmit(){
    this.arreglo.push({nombre: this.enteredNombre, precio: this.enteredPrecio});
    this.clean();
  }

  clean(){
    this.enteredNombre = "";
    this.enteredPrecio = 0;
  }
}
