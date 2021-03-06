import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { WorkshoporderComponent } from './workshoporder.component';
import { CreateworkshoporderComponent } from './createworkshoporder/createworkshoporder.component';
import { OrderlistComponent } from './orderlist/orderlist.component';


const routes: Routes = [
  {
    path: '', component: WorkshoporderComponent,
     children: [
      { path: '', redirectTo: '/trucklist', pathMatch: 'full'}, 
      { path: 'createorder/:truckname/:serialid/:partyid', component: CreateworkshoporderComponent },
      { path: 'editorder/:truckname/:serialid/:partyid', component: CreateworkshoporderComponent },
      { path: 'trucklist', component: OrderlistComponent }
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshoporderRoutingModule { }
