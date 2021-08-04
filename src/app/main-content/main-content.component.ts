import { Component, OnInit } from '@angular/core';

import {addDays} from 'date-fns';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  hourGrid=[8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  today: Date= new Date();
  firstDayOfWeek= this.today.getDate()-this.today.getDay();
  currentWeek=this.getDaysOfWeek();

  getDaysOfWeek(){
    return [
      new Date(this.today.setDate(this.firstDayOfWeek)),
      addDays(new Date(this.today.setDate(this.firstDayOfWeek)), 1),
      addDays(new Date(this.today.setDate(this.firstDayOfWeek)), 2),
      addDays(new Date(this.today.setDate(this.firstDayOfWeek)), 3),
      addDays(new Date(this.today.setDate(this.firstDayOfWeek)), 4),
      addDays(new Date(this.today.setDate(this.firstDayOfWeek)), 5),
      addDays(new Date(this.today.setDate(this.firstDayOfWeek)), 6),
     ]
   }

   events = Array();
   startHour = 8;
   timeslotInterval = 15;

   eventContainer = document.getElementsByClassName("event-container")[0];
   sections = 7;

   eventDate = document.getElementById("date");
   start = document.getElementById("start-time");
   end = document.getElementById("end-time");
   id = 1;


   addEvent(){
     const evt ={
      id : this.id,
      starttime: (<HTMLInputElement>document.getElementById("start-time")).value,
      endtime: (<HTMLInputElement>document.getElementById("end-time")).value,
      eventDate:(<HTMLInputElement>document.getElementById("date"))
    };

     this.id ++;

     this.events.push(evt);
   }

   renderEvent(event : String[]) {
    var oneEvent = document.createElement("div");
    var eventStatus = document.createElement("div");
    var eventName = document.createElement("div");
    var eventTime = document.createElement("div");

    oneEvent.appendChild(eventStatus);
    oneEvent.appendChild(eventName);
    oneEvent.appendChild(eventTime);
    eventName.setAttribute("class", "event-name");
    eventTime.setAttribute("class", "event-name");
    eventStatus.setAttribute("class", "event-status");
    oneEvent.setAttribute("class", "slot");
   }

  constructor() { }

  ngOnInit(): void {
  }

}
