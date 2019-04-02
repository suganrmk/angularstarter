import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopstarterComponent } from './workshopstarter/workshopstarter.component';
import { WorkshopComponent } from './workshop/workshop.component';

const routes: Routes = [ 
  {path: '' ,  component: WorkshopComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
