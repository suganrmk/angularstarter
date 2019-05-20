import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; 
import { WorkshoporderService } from '../../../core/services/';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common'
import { Iworkorder } from '../../../core/models/workshop'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../shared/directives/validator';
import { Location } from '@angular/common';
import { InteractionService } from '../../../core/services/interaction.service';

@Component({
  selector: 'app-createworkshoporder',
  templateUrl: './createworkshoporder.component.html',
  styleUrls: ['./createworkshoporder.component.scss']
})
export class CreateworkshoporderComponent implements OnInit {
  workshoporderForm: any;
  paramObj: any;
  editOrderView: Boolean = false;
  truckName: String;

  constructor(
    private _route: ActivatedRoute,
    private _workshoporderService: WorkshoporderService,
    private _confirmationService: ConfirmationService,
    private _renderer: Renderer2,
    private _location: Location,
    private _router: Router,
    private _interactionService: InteractionService) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.paramObj = { serialNumber: params.get("serialid"), shipToPartyNo: +params.get("partyid") };
      this.truckName = params.get("truckname");
    });
    this._route.url.subscribe(url =>
     { url[0].path === "editorder" ? this.updateworkshoporderForm() : this.createworkshoporderForm(); 
     console.log(url[0].path);
    }
    );
    this._renderer.addClass(document.body, 'hidesidebar');

    
  }


  createworkshoporderForm() {

    this.setFormdata();
    // this._workshoporderService.getWorkordernumber(this.paramObj).subscribe(workOrderNumber => {
    //   this.workshoporderForm.patchValue({ workshopOrderNumber: workOrderNumber })
    // });
  }

  updateworkshoporderForm() {
    console.log('in');
    this.editOrderView = true; 
    this._workshoporderService.getworkshoporderdetails(this.paramObj.serialNumber).subscribe(formdata => {
      console.log(formdata.priority, typeof(formdata.priority))
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
        serialNumber: new FormControl(this.paramObj.serialNumber),
        shipToPartyNo: new FormControl(this.paramObj.shipToPartyNo)
      });
    })
  }
  setFormdata() {
    this.workshoporderForm = new FormGroup({
      truckName: new FormControl(this.truckName),
      author: new FormControl('Test User', [Validators.required]),
      reporter: new FormControl('Test User', [Validators.required, CustomValidators.nowhitespace]),
      creationDate: new FormControl(formatDate(new Date(), 'dd.MM.yyyy', 'en')),
      workshopOrderDescription: new FormControl(''),
      workStatus: new FormControl('WAITING'),
      outOfOrder: new FormControl(false),
      serialNumber: new FormControl(this.paramObj.serialNumber),
      shipToPartyNo: new FormControl(this.paramObj.shipToPartyNo)
    });
  }


  submitform(editOrder) { 
    this._interactionService.setdisplay(true);
    this._workshoporderService.createorder(this.workshoporderForm.value, this.paramObj, editOrder).subscribe(workOrderNumber => { 
      this.workshoporderForm.patchValue({ workshopOrderNumber: workOrderNumber })
      let sucesstext = editOrder ? 'updated':'created';
      if (workOrderNumber) {
        this._location.back();
      }
    });
  }

  
  deleteform(){
    this._confirmationService.confirm({
      message: 'Please confirm if you want to dismiss this order',
      accept: () => {
        this._workshoporderService.deleteorder(this.paramObj.serialNumber).subscribe(res => {
          this._location.back();
        })
      },
      reject: () => {
     
      }
    });
  }

  discard(){
    this._location.back();
  }
  ngOnDestroy() {
    this._renderer.removeClass(document.body, 'hidesidebar');
  }
  
}
