import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmpleadoService} from '../../services/EmpleadoService';
import {Empleado} from '../../modelo/Empleado';

@Component({
  selector: 'app-employee-form-component',
  standalone: true,
  imports: [],
  templateUrl: './employee-form-component.component.html',
  styleUrl: './employee-form-component.component.css'
})
export class EmployeeFormComponentComponent {

  formEmpleado : FormGroup;

  constructor (private formBuilder : FormBuilder, private service : EmpleadoService){
    this.formEmpleado = this.formBuilder.group({
      nombre : ['',Validators.required],
      apellido: ['',Validators.required],
      edad: ['',Validators.required],
      empresa:['',Validators.required],
      documento:['',Validators.required],
      tipoDocumento:['',Validators.required]
     })
  }

  ngOinit() : void{}

   get() {
    this.formEmpleado.value;
   }

   onsubmit() : void{
   const empleado = new Empleado (
    this.formEmpleado.value.nombre,
    this.formEmpleado.value.apellido,
    this.formEmpleado.value.edad,
    this.formEmpleado.value.documento,
    this.formEmpleado.value.empresa,
    this.formEmpleado.value.tipoDocumento)

    this.service.guardar(empleado);
   }
}
