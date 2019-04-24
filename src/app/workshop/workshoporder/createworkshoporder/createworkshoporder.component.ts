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
  truckName: String;

  constructor(
    private _route: ActivatedRoute,
    private _workshoporderService: WorkshoporderService,
    private _confirmationService: ConfirmationService,
    private _renderer: Renderer2,
    private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.paramObj = { serialNumber: params.get("serialid"), shipToPartyNo: +params.get("partyid") };
      this.truckName = params.get("truckname");
    });
    this._route.url.subscribe(url =>
      url[0].path === "editorder" ? this.updateworkshoporderForm() : this.createworkshoporderForm()
    );
    this._renderer.addClass(document.body, 'hidesidebar');
  }


  createworkshoporderForm() {
    this.setFormdata();
    this._workshoporderService.getWorkordernumber(this.paramObj).subscribe(workOrderNumber => {
      this.workshoporderForm.patchValue({ workshopOrderNumber: workOrderNumber })
    });
  }

  updateworkshoporderForm() {
    this.editOrderView = true; 
    this._workshoporderService.getworkshoporderdetails().subscribe(formdata => {
      this.workshoporderForm = new FormGroup({
        truckName: new FormControl(this.truckName),
        author: new FormControl(formdata.author, [Validators.required]),
        reporter: new FormControl(formdata.reporter, [Validators.required, CustomValidators.nowhitespace]),
        creationDate: new FormControl(formatDate(new Date(formdata.createdDate), 'dd.MM.yyyy', 'en')),
        workshopOrderNumber: new FormControl(formdata.workshopOrderNumber),
        workshopOrderDescription: new FormControl(formdata.workshopOrderDescription),
        workStatus: new FormControl(formdata.workStatus),
        outOfOrder: new FormControl(formdata.outOfOrder),
        priority: new FormControl(formdata.priority),
      });
    })
  }
  setFormdata() {
    this.workshoporderForm = new FormGroup({
      truckName: new FormControl(this.truckName),
      author: new FormControl('Test User', [Validators.required]),
      reporter: new FormControl('Test User', [Validators.required, CustomValidators.nowhitespace]),
      creationDate: new FormControl(formatDate(new Date(), 'dd.MM.yyyy', 'en')),
      workshopOrderNumber: new FormControl(null),
      workshopOrderDescription: new FormControl(''),
      workStatus: new FormControl('waiting'),
      outOfOrder: new FormControl(false)
    });
  }


  submitform(editOrder) {
    this._workshoporderService.createorder(this.workshoporderForm.value, this.paramObj, editOrder).subscribe(res => { 
      let sucesstext = editOrder ? 'updated':'created';
      if (res) {
        this._confirmationService.confirm({
          message: 'Work Order is Successfully '+sucesstext,
          accept: () => {
            this._router.navigate(['/trucklist']);
          },
          reject: () => {
            this._workshoporderService.deleteorder(this.workshoporderForm.value, this.paramObj)   
          }

        });
      }
    });
  }

  ngOnDestroy() {
    this._renderer.removeClass(document.body, 'hidesidebar');
  }
  deleteform(){
    this._confirmationService.confirm({
      message: 'Please confirm if you want to dismiss this order',
      accept: () => {
        this._router.navigate(['/trucklist']);
      }
    });
  }
}
