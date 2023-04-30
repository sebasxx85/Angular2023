import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  color: boolean = true;
  borde: boolean = true;

  Lista: Array<String> = ['Argentina', 'Brasil', 'Colombia', 'Chile', 'Mexico' ];

  Edad: number = 50;

  Fecha: Date = new Date();

  constructor(){

  }

}
