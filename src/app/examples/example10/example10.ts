import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example10',
  imports: [FormsModule],
  templateUrl: './example10.html',
  styleUrl: './example10.css'
})
export class Example10 {
  arreglo: string[] = [];
  dato: string = "";

  onSubmit(){
    if (this.dato != ""){
      this.arreglo.push(this.dato);
      this.clean();
    }
    
  }

  clean(){
    this.dato = "";
  }
}
