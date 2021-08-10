import { Feature } from 'src/app/classes/feature';
import { Event } from './../classes/event';
import { Course } from './../classes/course';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/course/course.service';
import { Classroom } from '../classes/classroom';
import { ClassroomService } from '../services/classroom/classroom.service';

import {addDays} from 'date-fns';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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

  featureList: Feature[] =[{
    id: 1,
    name: "Projector"
  },
  {
    id: 2,
    name: 'Blackboard'
  }
];

  classrooms: Classroom[] =[
    {
      id: 1,
      name: 'S-132',
      location: "Floor 1",
      capacity: 50,
      features: this.featureList

    },
    {
      id: 1,
      name: 'L-353',
      location: "Floor 3",
      capacity: 120,
      features: this.featureList

    }
  ];


  events: Event[] =[{
    id: 1,
    course: this.courses[0],
    classroom: this.classrooms[0],
    day: "Monday",
    remainingPlaces: 32
  },
  {
    id: 2,
    course: this.courses[1],
    classroom: this.classrooms[1],
    day: "Sunday",
    remainingPlaces: 90
  },
   {
    id: 3,
    course: this.courses[0],
    classroom: this.classrooms[0],
    day: "Thursday",
    remainingPlaces: 32
  },

  ];

  constructor(
    private classroomService: ClassroomService,
    private courseService: CourseService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }




  hourGrid=[8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  date: Date= new Date();
  firstDayOfWeek= this.date.getDate()-this.date.getDay();
  currentWeek=this.getDaysOfWeek();



  public getEventCourseName(): void{

  }

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

   showDetails(event : Event) : void {
     Swal.fire({
       html:
       '<h1><b>' + event.course.name + '</b></h1>' +
       'Course Name: '  + event.course.name + '<br> <br>'+
       'Year: '  + event.course.year + '<br> <br>'+
       'Section: '  + event.course.section + '<br> <br> <br>' +
       '<h1><b>Classroom details</b></h1>' +
       'Classroom Name: '  + event.classroom.name + '<br> <br>' +
       'Classroom Location: '  + event.classroom.location + '<br> <br>' +
       'Remaining available spots: ' + event.remainingPlaces + ' / '+ event.classroom.capacity + '<br> <br>'


     })

   }

}
