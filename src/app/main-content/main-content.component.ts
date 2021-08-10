import { Classroom } from './../classes/classroom';
import { Event } from './../classes/event';
import { Course } from './../classes/course';
import { Component, OnInit } from '@angular/core';

import {addDays} from 'date-fns';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  courses: Course[]=[
    {
      id: 1,
      year: 1,
      name: "Programare I",
      section: "IR"
    },
    {
      id: 2,
      year: 2,
      name: "Baze de date",
      section: "IR"
    }
  ]
  classrooms: Classroom[]= [{
    id: 1,
    name: "032",
    location: "Et 1",
    capacity: 32
  }]

  events: Event[] =[{
    id: 1,
    course: this.courses[0],
    classroom: this.classrooms[0],
    day: "Monday"
  },
  {
    id: 2,
    course: this.courses[1],
    classroom: this.classrooms[0],
    day: "Sunday"
  },
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

  eventTime(currentDate: Date) : any {

  }


  date: Date= new Date();
  firstDayOfWeek= this.date.getDate()-this.date.getDay();
  currentWeek=this.getDaysOfWeek();



  getDaysOfWeek(){
    return [
      new Date(this.date.setDate(this.firstDayOfWeek)),
      addDays(new Date(this.date.setDate(this.firstDayOfWeek)), 1),
      addDays(new Date(this.date.setDate(this.firstDayOfWeek)), 2),
      addDays(new Date(this.date.setDate(this.firstDayOfWeek)), 3),
      addDays(new Date(this.date.setDate(this.firstDayOfWeek)), 4),
      addDays(new Date(this.date.setDate(this.firstDayOfWeek)), 5),
      addDays(new Date(this.date.setDate(this.firstDayOfWeek)), 6),
     ]
   }

}
