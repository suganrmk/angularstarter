import { Component, OnInit } from '@angular/core';
import { WorkshoporderService } from '../../core/services/'; 

@Component({
  selector: 'workshop-workshoporder',
  templateUrl: './workshoporder.component.html',
  styleUrls: ['./workshoporder.component.scss']
})

export class WorkshoporderComponent implements OnInit {
  trucklistdata: any;  

  constructor(private _workshoporderService: WorkshoporderService) { }

  ngOnInit() {
    this._workshoporderService.getAll().subscribe(res =>  this.trucklistdata =  res);
  } 
}

