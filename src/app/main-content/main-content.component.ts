import { FeatureService } from './../services/feature/feature.service';
import { Feature } from 'src/app/classes/feature';
import { Course } from './../classes/course';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/course/course.service';
import { Classroom } from '../classes/classroom';
import { ClassroomService } from '../services/classroom/classroom.service';

import {addDays} from 'date-fns';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { PlannerService } from '../services/planner/planner.service';
import { PlannerDTO } from '../classes/plannerDTO';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  public eventCourseId: number | undefined;
  public eventCourse: Course | undefined;

  public eventClassroomId: number | undefined;
  public eventClassroom: Classroom | undefined;

  public eventFeatureId: number | undefined;
  public eventFeature: Feature | undefined;

//   courses: Course[]=[
//     {
//       id: 1,
//       year: 1,
//       name: "Programare I",
//       section: "IR"
//     },
//     {
//       id: 2,
//       year: 2,
//       name: "Baze de date",
//       section: "IR"
//     }
//   ]

//   featureList: Feature[] =[{
//     id: 1,
//     name: "Projector"
//   },
//   {
//     id: 2,
//     name: 'Blackboard'
//   }
// ];

//   classrooms: Classroom[] =[
//     {
//       id: 1,
//       name: 'S-132',
//       location: "Floor 1",
//       capacity: 50,
//       features: this.featureList

//     },
//     {
//       id: 1,
//       name: 'L-353',
//       location: "Floor 3",
//       capacity: 120,
//       features: this.featureList

//     }
//   ];

//  events: Event[] =[
//     {
//     id: 1,
//     course: this.courses[0],
//     classroom: this.classrooms[0],
//     day: "Monday",
//     remainingPlaces: 32
//   },
//   {
//     id: 2,
//     course: this.courses[1],
//     classroom: this.classrooms[1],
//     day: "Sunday",
//     remainingPlaces: 90
//   },
//    {
//     id: 3,
//     course: this.courses[0],
//     classroom: this.classrooms[0],
//     day: "Thursday",
//     remainingPlaces: 32
//   },

//  ];

  public planners: PlannerDTO[] | undefined;

  constructor(
    private classroomService: ClassroomService,
    private courseService: CourseService,
    private featureService: FeatureService,
    private palnnerService: PlannerService,
    private router: Router) { }

  public getPlanners(): void{
    this.palnnerService.getPlanners().subscribe(
      (response: PlannerDTO[]) => {
        this.planners = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public goToAddEvent(){
    this.router.navigateByUrl('add-event');
  }

  public goToCourses(){
    this.router.navigateByUrl('courses');
  }

  // public getEventCourseId(): void{
  //   this.courseService.getEditCourseId().subscribe(
  //     courseId => this.eventCourseId = courseId
  //   );
  // }

  // public getEventCourse(): void{
    // if(this.eventCourseId !== undefined){
    //   this.courseService.getCourseById(this.eventCourseId).subscribe(
    //     (response: Course) => {
    //       console.log(response);
    //       this.eventCourse = response;
    //     },
    //     (error: HttpErrorResponse) => {
    //       alert(error.message);
    //     }
    //   );
    // }
  // }

  // public getEventClassroomId(): void{
  //   this.classroomService.getEditClassroomId().subscribe(
  //     classroomId => this.eventClassroomId = classroomId
  //   );
  // }

  // public getEventClassroom(): void{
  //   if(this.eventClassroomId !== undefined){
  //     this.classroomService.getClassroomById(this.eventClassroomId).subscribe(
  //       (response: Classroom) => {
  //         console.log(response);
  //         this.eventClassroom = response;
  //       },
  //       (error: HttpErrorResponse) =>{
  //         alert(error.message);
  //       }
  //     );
  //   }
  // }

  // public getEventFeatureId(): void{
  //   this.featureService.getEditFeatureId().subscribe(
  //     featureId => this.eventFeatureId = featureId
  //   );
  // }

  // public getEventFeature(): void{
  //   if(this.eventFeatureId!== undefined){
  //     this.featureService.getFeatueById(this.eventFeatureId).subscribe(
  //       (response: Feature) =>{
  //         console.log(response);
  //         this.eventFeature = response;
  //       },
  //       (error: HttpErrorResponse) =>{
  //         alert(error.message);
  //       }
  //     )
  //   }
  // }

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

   public showDetails(planner : PlannerDTO) : void {
     Swal.fire({
       showCancelButton: true,
       showConfirmButton: true,
       confirmButtonText: 'Enroll',
       confirmButtonColor: '#3085d6',
       html:
       '<h1><b>' + "Course details" + '</b></h1>' +
       'Course Name: '  + planner.course.name + '<br> <br>'+
       'Year: '  + planner.course.year + '<br> <br>'+
       'Section: '  + planner.course.section + '<br> <br> <br>' +
       '<h1><b>Classroom details</b></h1>' +
       'Classroom Name: '  + planner.classroom.name + '<br> <br>' +
       'Classroom Location: '  + planner.classroom.location + '<br> <br>' +
       'Remaining available spots: ' + planner.remainingPlaces + ' / '+ planner.classroom.capacity + '<br> <br>'


     })

    }

    ngOnInit(): void {

      // this.getEventClassroomId();
      // this.getEventClassroom();

      // this.getEventCourseId();
      // this.getEventClassroom();

      // this.getEventFeatureId();
      // this.getEventFeature();

      this.getPlanners();
    }

}
