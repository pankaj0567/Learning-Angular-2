import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {EmployeeComponent}   from './Employee/Employee.Component';
import { EmployeeListComponent } from './Employee/EmloyeeList.Component'

@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent , EmployeeComponent , EmployeeListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
