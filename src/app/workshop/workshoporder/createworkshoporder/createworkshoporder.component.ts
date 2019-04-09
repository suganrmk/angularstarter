import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { WorkshoporderService } from '../../../core/services/'; 

@Component({
  selector: 'app-createworkshoporder',
  templateUrl: './createworkshoporder.component.html',
  styleUrls: ['./createworkshoporder.component.scss']
})
export class CreateworkshoporderComponent implements OnInit {
  workshoporder: any;
  partyid: String;
  serialId: String;
  constructor(private _route: ActivatedRoute, private _workshoporderService: WorkshoporderService) { }

  ngOnInit() {
    this.workshoporder = {
      truckName: 'string',
      author: 'John Dee',
      reporter: 'John Dee',
      creationDate: new Date(),
      workshopOrderNumber: null,
      workshopOrderDescription: null,
      outOfOrder: false
    }
    this.setTruckdata();

  }

  setTruckdata() { 
    this._route.paramMap.pipe(
      switchMap(params => { 
        let paramObj  = {serialNumber: +params.get("serialid") , shipToPartyNo:+params.get("partyid")};
        return this._workshoporderService.getWorkordernumber(paramObj);
      })
    ).subscribe(workOrderNumber => {this.workshoporder.workshopOrderNumber = workOrderNumber , console.log(typeof(workOrderNumber))}) 
  }



  submitform() {
    console.log(this.workshoporder)
    this._workshoporderService.createorder(this.workshoporder);
  }

}
