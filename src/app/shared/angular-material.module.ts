import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }
