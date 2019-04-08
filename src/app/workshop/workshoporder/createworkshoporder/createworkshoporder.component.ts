import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createworkshoporder',
  templateUrl: './createworkshoporder.component.html',
  styleUrls: ['./createworkshoporder.component.scss']
})
export class CreateworkshoporderComponent implements OnInit {
  workshoporder: any;
  constructor() { }

  ngOnInit() {
    this.workshoporder = {
      author: 'John Dee',
      reporter: 'Jake Dee',
      date: new Date(),
      number: 1222,
    }

 
  }

  submitform(){
    console.log( this.workshoporder)
  }

}
