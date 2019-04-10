import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { WorkshoporderService } from '../../../core/services/';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-createworkshoporder',
  templateUrl: './createworkshoporder.component.html',
  styleUrls: ['./createworkshoporder.component.scss']
})
export class CreateworkshoporderComponent implements OnInit {
  workshoporder: any;
  partyNo: Number;
  serialNo: String;
  paramObj: any;
  constructor(
    private _route: ActivatedRoute,
    private _workshoporderService: WorkshoporderService,
    private _messageService: MessageService) { }

  ngOnInit() {
    this.workshoporder = {
      truckName: null,
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
        this.workshoporder.truckName = params.get("truckname");
        this.serialNo = params.get("serialid");
        this.partyNo = +params.get("partyid");
        this.paramObj = { serialNumber: this.serialNo, shipToPartyNo: this.partyNo };
        return this._workshoporderService.getWorkordernumber(this.paramObj);
      })
    ).subscribe(workOrderNumber => { this.workshoporder.workshopOrderNumber = workOrderNumber })
  }

  submitform() {
    this._workshoporderService.createorder(this.workshoporder, this.paramObj).subscribe(res => {
      if (res) {
        this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Workshoporder Sucessfully Updated' });

      }
    });
  }

}
