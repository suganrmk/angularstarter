import { Component, OnInit } from '@angular/core';
import { EditworkshoporderService, WorkshoporderService } from '../../../core/services/';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  waitingList: any[];
  inprogressList: any[] = [];
  existingSlots: any[] = [];
  selectedOrder: any = null;
  totalSlot: number = 6;
  

  constructor( private _editworkshoporderService: EditworkshoporderService) { }

  ngOnInit() {
    this._editworkshoporderService.getWaitingList().subscribe(data => {
      this.waitingList = data;
    })

    this._editworkshoporderService.getInprogressList().subscribe(data => {
      this.setttingSlot(data);
    })
  }

  setttingSlot(data) {
    data.forEach(function (val, i) {
      this.existingSlots.push(parseInt(val['assignedSlot']));
    }, this);

    Array(this.totalSlot).fill(null).forEach((_, i) => {
      let freeSlot = {
        "assignedSlot": i + 1,
        "freeSlot": true
      }
      this.existingSlots.indexOf(i + 1) < 0 ? this.inprogressList.push(freeSlot) : this.inprogressList.push(data[this.existingSlots.indexOf((i + 1))]);
    }); 
  }

  selectorder(waitingindex) {
    this.selectedOrder = waitingindex;
  }

  updateSlot(inprogressindex) {
    if (this.selectedOrder !== null) {
      let selectedSlot = inprogressindex + 1;
      let body = this.waitingList[this.selectedOrder];

      this._editworkshoporderService.updateWorkstatus(body, selectedSlot).subscribe(res => {
        this.inprogressList[inprogressindex] = this.waitingList[this.selectedOrder];
        this.waitingList.splice(this.selectedOrder, 1);
        this.existingSlots.push(selectedSlot)
        this.selectedOrder = null;
      })
    }

  }

  trackByFn(index, item) {
    return item;
  }

}
