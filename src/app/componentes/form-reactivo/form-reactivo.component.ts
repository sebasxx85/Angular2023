import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit{

  formularioUsuario:  FormGroup;

  constructor(
    private form: FormBuilder
  ){
    //uso el metodo group de la clase FormGroup que usa un JSON
    this.formularioUsuario = form.group({
      //El primero valor por defecto y modificadores
      nombre: new FormControl('',[]),
      correo: new FormControl('',[]), 
      password: new FormControl('', []),
      admin: new FormControl(false, []),
    })
  }
     

  ngOnInit(): void {
    
  }

  agregarUsuario(){
    console.log(this.formularioUsuario);
    
  }

}
