import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { WorkshoporderService } from '../../../core/services/';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common'
import { Iworkorder } from '../../../core/models/workshop'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../shared/directives/validator';


@Component({
  selector: 'app-createworkshoporder',
  templateUrl: './createworkshoporder.component.html',
  styleUrls: ['./createworkshoporder.component.scss']
})
export class CreateworkshoporderComponent implements OnInit {
  workshoporderForm: any;
  paramObj: any;
  editOrderView: Boolean; 
  constructor(
    private _route: ActivatedRoute,
    private _workshoporderService: WorkshoporderService,
    private _confirmationService: ConfirmationService,
    private _renderer: Renderer2,
    private _router: Router) {}

  ngOnInit() {
    this.workshoporderForm = new FormGroup({
      truckName: new FormControl(''),
      author: new FormControl('Test User', [Validators.required]),
      reporter: new FormControl('Test User', [Validators.required, CustomValidators.nowhitespace]),
      creationDate: new FormControl(formatDate(new Date(), 'dd.MM.yyyy', 'en')),
      workshopOrderNumber: new FormControl(null),
      workshopOrderDescription: new FormControl(''),
      workStatus: new FormControl('waiting'),
      outOfOrder: new FormControl(false)
    });
    
    this.setFormdata();
    this._renderer.addClass(document.body, 'hidesidebar');
  }

  setFormdata() {
    this._route.url.subscribe(url =>  url[0].path === "editorder" ? (this.editOrderView = true, this.workshoporderForm.addControl('priority', new FormControl()) ) : this.editOrderView = false);
    this._route.paramMap.pipe(
      switchMap(params => {
        this.workshoporderForm.patchValue({ truckName: params.get("truckname") });
        this.paramObj = { serialNumber: params.get("serialid"), shipToPartyNo: +params.get("partyid") };
        return this._workshoporderService.getWorkordernumber(this.paramObj);
      })
    ).subscribe(workOrderNumber => { this.workshoporderForm.patchValue({ workshopOrderNumber: workOrderNumber }) })
  }

  submitform(editOrder) {
    let sucesstext;
    editOrder ? sucesstext = 'updated': sucesstext = 'created'
    this._workshoporderService.createorder(this.workshoporderForm.value, this.paramObj, editOrder).subscribe(res => {
      if (res) {
        this._confirmationService.confirm({
          message: 'Work Order is Successfully '+sucesstext,
          accept: () => {
            this._router.navigate(['/trucklist']);
          }
        });
      }
    });
  }
  // updateform() {
  //   this._workshoporderService.createorder(this.workshoporderForm.value, this.paramObj).subscribe(res => {
  //     if (res) {
  //       this._confirmationService.confirm({
  //         message: 'Work Order is Successfully updated',
  //         accept: () => {
  //           this._router.navigate(['/trucklist']);
  //         }
  //       });
  //     }
  //   });
  // }

  ngOnDestroy() {
    this._renderer.removeClass(document.body, 'hidesidebar');
  }
}
