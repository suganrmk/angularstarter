import { Component, OnInit } from '@angular/core';
import { ShareService } from '../providers/';
// export * from '../providers/shared.service';
@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  trucklistdata: any;
  trucklist: any;
  data: any;

  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.shareservice.getData('/assets/json/Trucklist.json').subscribe(res => { 
      this.trucklistdata =  res['trucks']; 
    });
  }
}
