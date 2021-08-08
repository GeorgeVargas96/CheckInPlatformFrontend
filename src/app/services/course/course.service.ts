import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseDTO } from 'src/app/classes/courseDTO';
import { environment } from 'src/environments/environment';
import { Course } from '../../classes/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addCourse(course: Course): Observable<Course>{
    return this.http.post<Course>(`${this.apiUrl}/course`, course);
  }

  public getCourses(): Observable<CourseDTO[]>{
    return this.http.get<CourseDTO[]>(`${this.apiUrl}/course/all`);
  }

  public deleteCourse(courseId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/course/${courseId}`);
  } 

}
