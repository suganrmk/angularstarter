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
  constructor(private _route: ActivatedRoute, private _workshoporderService: WorkshoporderService) { }

  ngOnInit() {
    this.workshoporder = {
      author: 'John Dee',
      reporter: 'Jake Dee',
      date: new Date(),
      number: 1222,
    }
    this.setTruckdata();

  }

  setTruckdata() {
    // this.serialId = this._route.snapshot.paramMap.get("serialid");
    // this.partyid = this._route.snapshot.paramMap.get("partyid");
    const ddata = this._workshoporderService.getWorkordernumber().subscribe(res => console.log(res));
    console.log( ddata)
    
    // const that = this;
    // let response = that._route.paramMap.pipe(
    //   switchMap(params => {
    //     console.log('params')
    //     const serialid = +params.get("serialid");
    //     const partyid = +params.get("partyid");

    //     // let data  = {
    //     //  a = +params.get("serialid"),
    //     //  b = +params.get("partyid")
    //     // }
     
    //     return that._workshoporderService.getWorkordernumber(serialid , partyid ) // http request
    //   })
    // )

    // console.log(response)
  }



  submitform() {
    console.log(this.workshoporder)
  }

}
