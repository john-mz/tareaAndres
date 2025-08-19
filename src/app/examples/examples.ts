import { Component } from '@angular/core';
import { Card } from '../shared/card/card';
import { Example1 } from './example1/example1';
import { Example2 } from './example2/example2';
import { Example3 } from './example3/example3';
import { Example4 } from './example4/example4';
import { Example5 } from './example5/example5';
import { Example6 } from './example6/example6';
import { Example7 } from './example7/example7';
import { Example8 } from './example8/example8';
import { Example9 } from './example9/example9';
import { Example10 } from './example10/example10';



@Component({
  selector: 'app-examples',
  imports: [Card, Example1, Example2, Example3, Example4, Example5, Example6, Example7, Example8, Example9, Example10],
  templateUrl: './examples.html',
  styleUrl: './examples.css'
})
export class Examples {

}
