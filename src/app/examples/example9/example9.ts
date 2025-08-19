import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../example4/tarea.model';

@Component({
  selector: 'app-example9',
  imports: [FormsModule],
  templateUrl: './example9.html',
  styleUrl: './example9.css'
})
export class Example9 {
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
