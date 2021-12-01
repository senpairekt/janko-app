import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SharedModuleModule,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
