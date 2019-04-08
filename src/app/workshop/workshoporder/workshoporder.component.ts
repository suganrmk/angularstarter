import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../core/services/';
import { Router } from '@angular/router'
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'workshop-workshoporder',
  templateUrl: './workshoporder.component.html',
  styleUrls: ['./workshoporder.component.scss']
})
export class WorkshoporderComponent implements OnInit {
  trucklistdata: any;
  trucklist: any;
  data: any; 
  serialNumber: string;
  shipToPartyNo: string; 

  constructor(private shareservice: ShareService,
              private _router:Router) { }

  ngOnInit() {
    this.shareservice.postData('http://10.233.36.150:8080/workshopservice/api/rest/trucks?lang=en', {'IV-USER': 'kxdel0095' , 'ecid': 'FOV-FT-TruckListService-Case1'}).subscribe(res => { 
      console.log(res['trucks'])
      this.trucklistdata =  res['trucks']; 
    });
  }
  getworkshopordernumber(serialNumber,shipToPartyNo){
      this._router.navigate(['createworkshoporder/',serialNumber,shipToPartyNo]);
  }
}

