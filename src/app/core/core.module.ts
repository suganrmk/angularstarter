import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { 
  ApiPrefixInterceptor , HttpConfigInterceptor, WorkshoporderService,
  ApiService
 } from './services/';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiPrefixInterceptor,
    WorkshoporderService,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ]
})
export class CoreModule { }
