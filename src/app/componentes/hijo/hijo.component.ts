import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudiante } from '../models/estudiante';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  //recibiendo un arreglo desde padre
  @Input() estudiantes!: any[];

  //recibiendo una funcion desde padre
  @Input() funcionPrueba!: () => void;

  //output con evento similar al eventlistener de javascript
  @Output() eventoSalida: EventEmitter<string> = new EventEmitter<string>()
  @Output() eventoSalidaEstudiante: EventEmitter<Estudiante> = new EventEmitter<Estudiante>()

  ngOnInit(): void {
    this.funcionPrueba();
    this.eventoSalida.emit('evento output desde componente hijo');
  }

  agregarEstudiante(){
    let estudiante: Estudiante = {
      nombre: 'seba',
      edad: 37,
      curso: 'angular'
    }
    this.eventoSalidaEstudiante.emit(estudiante);
  }

}
