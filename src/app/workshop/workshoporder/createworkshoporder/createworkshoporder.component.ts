import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { WorkshoporderService } from '../../../core/services/';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common'

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
  display: boolean = false;
  constructor(
    private _route: ActivatedRoute,
    private _workshoporderService: WorkshoporderService,
    private _confirmationService: ConfirmationService,
    private _router: Router) { }

  ngOnInit() {
    this.workshoporder = {
      truckName: null,
      author: 'John Dee',
      reporter: 'John Dee',
      creationDate: formatDate(new Date(), 'dd.MM.yyyy', 'en'),
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
        this._confirmationService.confirm({
          message: 'Work Order is Successfully created',
          accept: () => {
            this._router.navigate(['/trucklist']);
          }
        });

      }
    });
  }

}
