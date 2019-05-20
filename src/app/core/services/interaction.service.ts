import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _display = new Subject<any>();
  display$ = this._display.asObservable();

  constructor() { }

  setdisplay(status: boolean) {
    console.log("After clicking of button service is worked");
    this._display.next(status);
    console.log("service message is: "+status);
  }

  getdata(){
    return this.display$
  }
}
