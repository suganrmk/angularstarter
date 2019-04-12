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
  constructor(
    private _route: ActivatedRoute,
    private _workshoporderService: WorkshoporderService,
    private _confirmationService: ConfirmationService,
    private renderer: Renderer2,
    private _router: Router) {}

  ngOnInit() { 
   this.workshoporderForm = new FormGroup({
      truckName: new FormControl(''),
      author: new FormControl('John Deu'),
      reporter: new FormControl('John Deu', [Validators.required, CustomValidators.nowhitespace] ),
      creationDate: new FormControl(formatDate(new Date(), 'dd.MM.yyyy', 'en')),
      workshopOrderNumber: new FormControl(null),
      workshopOrderDescription: new FormControl(''),
      outOfOrder: new FormControl(false)
    });
    this.setFormdata();
    this.renderer.addClass(document.body, 'hidesidebar');
  }

  setFormdata() { 
    this._route.paramMap.pipe(
      switchMap(params => { 
        this.workshoporderForm.patchValue({truckName:  params.get("truckname")});
        this.paramObj = { serialNumber:  params.get("serialid"), shipToPartyNo: +params.get("partyid")};
        return this._workshoporderService.getWorkordernumber(this.paramObj);
      })
    ).subscribe(workOrderNumber => {this.workshoporderForm.patchValue({workshopOrderNumber: workOrderNumber}) })
  }

  submitform(){ 
    this._workshoporderService.createorder(this.workshoporderForm.value, this.paramObj).subscribe(res => {
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

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'hidesidebar');
  }
}
