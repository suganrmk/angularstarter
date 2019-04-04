import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../core/services/';
@Component({
  selector: 'workshop-workshoporder',
  templateUrl: './workshoporder.component.html',
  styleUrls: ['./workshoporder.component.scss']
})
export class WorkshoporderComponent implements OnInit {
  trucklistdata: any;
  trucklist: any;
  data: any;

  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.shareservice.getData('/assets/json/Trucklist.json').subscribe(res => { 
      this.trucklistdata =  res['trucks']; 
    });
  }
  getworkshopordernumber(){
    
  }
}
