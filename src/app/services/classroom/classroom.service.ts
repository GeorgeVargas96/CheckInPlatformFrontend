import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from 'src/app/classes/classroom';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addClassroom(classroom: Classroom): Observable<Classroom>{
    return this.http.post<Classroom>(`${this.apiUrl}/classroom`, classroom);
  }

  public getClassrooms(): Observable<Classroom[]>{
    return this.http.get<Classroom[]>(`${this.apiUrl}/classroom/all`);
  }
}
