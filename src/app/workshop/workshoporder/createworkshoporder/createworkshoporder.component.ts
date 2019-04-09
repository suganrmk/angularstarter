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
  paramObj: any;
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
        this.paramObj  = {serialNumber: +params.get("serialid") , shipToPartyNo:+params.get("partyid")};
        return this._workshoporderService.getWorkordernumber(this.paramObj);
      })
    ).subscribe(workOrderNumber => {this.workshoporder.workshopOrderNumber = workOrderNumber}) 
  }



  submitform() { 
    this._workshoporderService.createorder(this.workshoporder, this.paramObj).subscribe(res => {
      console.log(res);
    });
  }

}
