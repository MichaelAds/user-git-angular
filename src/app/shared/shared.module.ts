import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    AngularMaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
