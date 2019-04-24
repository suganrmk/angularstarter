import { Component, OnInit } from '@angular/core';
import { EditworkshoporderService } from '../../../core/services/';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  waitingWorkshopOrder: any;
  constructor(private _editworkshoporderService: EditworkshoporderService) { }

  ngOnInit() {
      this._editworkshoporderService.getWaitingList().subscribe(data => { 
        this.waitingWorkshopOrder = data;
        console.log(this.waitingWorkshopOrder)
      })
  }

}
