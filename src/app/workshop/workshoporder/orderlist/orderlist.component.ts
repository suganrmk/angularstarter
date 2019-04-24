import { Component, OnInit } from '@angular/core';
import { WorkshoporderService , EditworkshoporderService } from '../../../core/services/';
import { IworkorderList } from '../../../core/models/workshop';
import { Observable } from 'rxjs';
@Component({
  selector: 'workshop-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {
  trucklistdata: any[];
  error: any;

  constructor(private _workshoporderService: WorkshoporderService, private _editworkshoporderService: EditworkshoporderService) { }


  ngOnInit() {
    this._workshoporderService.getAllTruck().subscribe(res => {
      this.trucklistdata = res; 
    }, (error) => {
      this.error = error; 
    });

  }



}