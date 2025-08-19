import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Examples } from "./examples/examples";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Examples],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarea-andres');
}
