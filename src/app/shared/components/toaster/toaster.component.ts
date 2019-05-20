import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../../core/services/interaction.service';
import { ActivatedRoute } from "@angular/router"; 
import { bind } from '@angular/core/src/render3';

@Component({
  selector: 'toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  display: boolean  = false;

  constructor(private interactionService: InteractionService,) {}

  ngOnInit() { 
    var that = this;
    this.interactionService.display$.subscribe(res => {
      console.log(res)
      this.display = res
      setTimeout(function(){that.display=true;}, 3000)
  });

  }
  

}
