import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from 'src/app/classes/feature';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addFeature(feature: Feature): Observable<Feature>{
    return this.http.post<Feature>(`${this.apiUrl}/feature`, feature);
  }

  public getFeatures(): Observable<Feature[]>{
    return this.http.get<Feature[]>(`${this.apiUrl}/feature/all`);
  }
}
