import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../example3/producto.model';

@Component({
  selector: 'app-example5',
  imports: [FormsModule],
  templateUrl: './example5.html',
  styleUrl: './example5.css'
})
export class Example5 {
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
