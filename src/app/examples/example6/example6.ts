import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../example3/producto.model';

@Component({
  selector: 'app-example6',
  imports: [FormsModule],
  templateUrl: './example6.html',
  styleUrl: './example6.css'
})
export class Example6 {
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
