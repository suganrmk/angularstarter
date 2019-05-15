
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { api } from '../constants';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { IworkorderList } from '../../core/models/workshop';
import { headerID } from '../enums/header';
import { Subject } from 'rxjs';
const headers = new HttpHeaders({
  'IV-USER': headerID.IV_USER,
  'ecid': headerID.ECID,
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class EditworkshoporderService {
  
  constructor(  private apiService: ApiService, private http: HttpClient) {}

  getWaitingList() {
  const options = { headers: headers };
    const body = {
    shipToPartyNo: "29804",
    sortingOrder: "ASC",
    workStatus: "WAITING"
  }  
  return this.apiService.post(api.getworkshoporderlists, body, options)
    .pipe(map(data => data));
  }

  
  getInprogressList() {
    const options = { headers: headers };
      const body = {
      shipToPartyNo: "29804",
      sortingOrder: "ASC",
      workStatus: "INPROGRESS"
    }  
    return this.apiService.post(api.getworkshoporderlists, body, options)
      .pipe(map(data => data));
    }


    // create/update work order
    updateWorkstatus(data , slotnumber: number): Observable<[string]> {  
      let body = {
        "assignedSlot":slotnumber,
        "workStatus": "INPROGRESS"
      }
      console.log(data , data.serialNumber)
      let paramObj = { serialNumber: data.serialNumber, shipToPartyNo: data.shipToPartyNo };
      const options = { headers, params: paramObj };       

      return this.apiService.post( api.updateorder, body, options).pipe(map(data => data));
    }



  
}