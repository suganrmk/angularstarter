import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';   
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TableModule, 
    DialogModule
  ],
  providers:[]
})

export class SharedModule {}
