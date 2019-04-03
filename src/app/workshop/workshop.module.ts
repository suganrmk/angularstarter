import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshoporderComponent } from './workshoporder/workshoporder.component';
import { WorkshopRoutingModule } from './workshop-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WorkshoporderComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WorkshopRoutingModule
  ]
})
export class WorkshopModule { }
