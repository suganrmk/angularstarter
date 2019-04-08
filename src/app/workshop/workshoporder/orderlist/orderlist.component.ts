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

<<<<<<< HEAD
  ngOnInit() {
   this._workshoporderService.getAll().subscribe(res =>  this.trucklistdata =  res);


    // this._workshoporderService.getAllTruck().subscribe(res => { 
    //   console.log(res['trucks'])
    //   this.trucklistdata =  res['trucks']; 
    // });


=======
  ngOnInit() { 
    this._workshoporderService.getAllTruck().subscribe(res =>  this.trucklistdata =  res); 
>>>>>>> 2e5cafdba359afe6bbaed2839cbdff923a9b843d
  } 
}

