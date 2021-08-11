import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlannerDTO } from 'src/app/classes/plannerDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addPlanner(classroomId: number, courseId: number, time: string): Observable<PlannerDTO>{
    return this.http.post<PlannerDTO>(`${this.apiUrl}/planner/classroom/${classroomId}/course/${courseId}`, time);
  }
 
}
