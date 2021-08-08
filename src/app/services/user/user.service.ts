import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../classes/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

}
