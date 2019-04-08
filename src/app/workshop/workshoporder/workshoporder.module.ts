import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { WorkshoporderComponent } from './workshoporder.component';
import { CreateworkshoporderComponent } from './createworkshoporder/createworkshoporder.component';
import { SharedModule } from '../../shared/shared.module';
import { WorkshoporderRoutingModule } from './workshoporder-routing.module';


@NgModule({
  declarations: [
    OrderlistComponent,
    CreateworkshoporderComponent,
    WorkshoporderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WorkshoporderRoutingModule
  ]
})
export class WorkshoporderModule { }
