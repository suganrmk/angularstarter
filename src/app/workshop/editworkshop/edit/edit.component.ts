import { Component, OnInit } from '@angular/core';
import { EditworkshoporderService } from '../../../core/services/';
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
  selectedOrder: any;
  totalSlot: number = 6;
  constructor(private _editworkshoporderService: EditworkshoporderService) { }

  ngOnInit() {
    this._editworkshoporderService.getWaitingList().subscribe(data => {
      this.waitingList = data;
    })

    this._editworkshoporderService.getInprogressList().subscribe(data => { 
      this.setttingSlot(data);
    })   
  }

  setttingSlot(data){ 
    data.forEach(function (val, i) {
      this.existingSlots[i] = parseInt(val['assignedSlot']);
    });
    Array(this.totalSlot).fill(null).forEach((_, i) => {
      let freeSlot = {
        "assignedSlot": i + 1,
        "freeSlot": true
      }
      this.existingSlots.indexOf(i + 1) < 0 ? this.inprogressList.push(freeSlot) : this.inprogressList.push(data[this.existingSlots.indexOf((i + 1))]);
    });
  }

  selectOrder(index){
    this.selectOrder = index
  }

  updateSlot(slot) {
    console.log(slot)
    this.selectedOrder = null;
    
  }

}
