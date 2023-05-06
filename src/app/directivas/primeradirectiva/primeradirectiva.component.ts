import { Component } from '@angular/core';

@Component({
  selector: 'app-primeradirectiva',
  templateUrl: './primeradirectiva.component.html',
  styleUrls: ['./primeradirectiva.component.css']
})
export class PrimeradirectivaComponent {

  color: boolean = true;
  border: boolean = true;

  Lista: Array<String> = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'Espania', 'Mexico']

  Edad: number = 50;

  Fecha: Date = new Date();
  Parrafo: String = "Este es un parrafo de ejemplo"

  nombre!: string;

  variable1: number = 20; 

  manejarEvento(){
    this.variable1 = Math.round(Math.random()*20);
  }

}
