import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshoporderComponent } from './workshoporder/workshoporder.component';
import { LandingComponent } from './landing/landing.component';
import { CreateworkshoporderComponent } from './createworkshoporder/createworkshoporder.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
     children: [
      { path: '', component: WorkshoporderComponent },
      { path: 'createworkorder/:id', component: CreateworkshoporderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopRoutingModule { }
