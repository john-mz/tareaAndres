import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CategoriaElemento {
  categoria: string;
  elemento: string[];
}

@Component({
  selector: 'app-example8',
  imports: [FormsModule],
  templateUrl: './example8.html',
  styleUrl: './example8.css'
})
export class Example8 {
  objeto: CategoriaElemento[] = [
    {categoria: "a", elemento: []},
    {categoria: "b", elemento: []},
    {categoria: "c", elemento: []}
  ];

  enteredCategoria: string = "";
  enteredElemento: string = "";

  onSubmit(): void{
    this.objeto.forEach(element => {
      if (element.categoria == this.enteredCategoria){
        element.elemento.push(this.enteredElemento);
      }
    });
    this.clean();
  }

  clean(): void{
    this.enteredCategoria = "";
    this.enteredElemento = "";
  }
}
