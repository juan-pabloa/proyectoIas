export class Empleado {

     nombre : string;
     apellido : string;
     edad : number;
     empresa : string;
     documento: number;
     tipoDocumento : string;

  constructor (nombre : string, apellido: string, edad : number, empresa: string, documento : number, tipoDocumento : string){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.empresa = empresa;
  this.documento = documento;
  this.tipoDocumento = tipoDocumento;
     }
    
}