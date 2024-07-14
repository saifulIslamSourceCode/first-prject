import { Component } from '@angular/core';

// import { Component,NgZone, OnDestroy } from '@angular/core';
//import { DatePipe } from '@angular/common';

@Component({
  selector: 'date',
  standalone: true,
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css',
  // providers: [DatePipe]
})
export class DateComponent{
  head: string = "Curretn Date & Time"
  dateMassage: string = "";
  intervalID: any;
  constructor() {
    let curretDate = new Date();
    this.dateMassage = curretDate.toDateString() + " " + curretDate.toLocaleTimeString()
    
  }
}
