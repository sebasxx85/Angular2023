import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { HijoComponent } from '../hijo/hijo.component';
@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit, AfterContentInit {
  //viewchild
  @ViewChild(HijoComponent) componenteHijo!: HijoComponent;
  
  //EventoSalida
  mensajeSalida: string = '';

  constructor() {
    console.log("Llamando desde el constructor", this,this.componenteHijo);
  }

  ngOnInit(): void {
    console.log("Llamando desde el ngOnInit", this,this.componenteHijo);
  }

  ngAfterContentInit(): void {
    console.log("Llamando desde el ngAfterContent", this,this.componenteHijo);
    
  }
  

  estudiantesPadre: any[] = [
    { nombre: 'sebastian', edad: 37, curso: 'Angular' },
    { nombre: 'alex', edad: 25, curso: 'Java' },
    { nombre: 'ana', edad: 30, curso: 'Angular' },
    { nombre: 'jaime', edad: 27, curso: 'PHP' },
  ]

  funcionPrueba() {
      alert("Hola mundo desde funcionPrueba");

  }

  manejarEventoSalida(mensaje: string){
      this.mensajeSalida = mensaje;
  }
 
  agregarEstudiante(estudiante: Estudiante){
    this.estudiantesPadre.push(estudiante);
  }

}
