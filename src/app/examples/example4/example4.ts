import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from './tarea.model';


@Component({
  selector: 'app-example4',
  imports: [FormsModule],
  templateUrl: './example4.html',
  styleUrl: './example4.css'
})
export class Example4 {
  enteredTarea: string = "";
  enteredEstado!: boolean;
  arreglo: Tarea[] = [];

  onSubmit(){
    this.arreglo.push({nombre: this.enteredTarea, estado: this.enteredEstado});
  }

  clean(){
    this.enteredTarea = "";
  }
}
