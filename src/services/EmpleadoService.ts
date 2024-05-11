import { Injectable } from "@angular/core";
import {Empleado}  from "../modelo/Empleado";


@Injectable({
    providedIn: 'root'
})

export class EmpleadoService {

    empleado : Empleado[] = [];

    constructor (){
       
    }

    guardar(empleado : Empleado){
        this.empleado.push(empleado);
    }
}