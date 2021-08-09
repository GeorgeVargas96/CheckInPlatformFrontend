import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDTO } from '../classes/courseDTO';
import { CourseService } from '../services/course/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: CourseDTO[] | undefined;

  constructor(
    private courseService: CourseService,
    private router: Router) { }

  public getCourses(): void{
    this.courseService.getCourses().subscribe(
      (response: CourseDTO[]) => {
        this.courses = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public goToAddCourse(){
    this.router.navigateByUrl('add-course');
  }

  public onDeleteCourse(courseId: number): void{
    this.courseService.deleteCourse(courseId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCourses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onEditCourse(courseId: number): void{
    this.courseService.setEditCourseId(courseId);
    this.router.navigateByUrl('edit-course');
  }

  ngOnInit(): void {
    this.getCourses();
  }

}
