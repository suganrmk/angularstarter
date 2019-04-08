import { Component, OnInit } from '@angular/core';
import { WorkshoporderService } from '../../../core/services/'; 

@Component({
  selector: 'workshop-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent  implements OnInit {
  trucklistdata: any;  

  constructor(private _workshoporderService: WorkshoporderService) { }

  ngOnInit() { 
    this._workshoporderService.getAll().subscribe(res => { 
      console.log(res )
      this.trucklistdata =  res; 
    });
    // this._workshoporderService.getAllTruck().subscribe(res =>  this.trucklistdata =  res); 
  } 
}

