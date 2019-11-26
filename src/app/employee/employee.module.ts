import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [CreateEmployeeComponent,
    ListEmployeesComponent],
  imports: [
    EmployeeRoutingModule, SharedModule
  ],
 // exports:[CreateEmployeeComponent

  
})
export class EmployeeModule { }
