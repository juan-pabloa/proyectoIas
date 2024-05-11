import { NgModule,ReactiveFormsModule  } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {EmpleadoService} from "../services/EmpleadoService";
import {EmployeeFormComponentComponent,EmployeeListComponentComponent} from "../Components";

@NgModule ({
    declarations:[
        EmployeeFormComponentComponent,EmployeeListComponentComponent
    ],
    imports:[
        BrowserModule, ReactiveFormsModule 
    ],
    providers:[
        EmpleadoService, 
    ],
    bootstrap:[
        AppComponent
    ]

})



export class AppModule{

}