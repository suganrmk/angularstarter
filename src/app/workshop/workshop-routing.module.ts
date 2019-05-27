import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
     children: [
      { path: '', loadChildren: './workshoporder/workshoporder.module#WorkshoporderModule' },
      { path: 'edit', loadChildren: './editworkshop/editworkshop.module#EditworkshopModule' }, 
      { path: 'archive', loadChildren: './archives/archives.module#ArchivesModule' },
      { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
      { path: '*', loadChildren: './workshoporder/workshoporder.module#WorkshoporderModule' },
    ]
  } 
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopRoutingModule { }
