import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  

const routes: Routes = [ 
  {path: '' ,  loadChildren: './workshop/workshop.module#WorkshopModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true, useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
