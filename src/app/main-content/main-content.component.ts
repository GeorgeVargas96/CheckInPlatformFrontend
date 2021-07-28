import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';



@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    editable: true
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  constructor() { }

  ngOnInit(): void {
  }

}
