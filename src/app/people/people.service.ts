import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private readonly baseUrl = `${environment.apiUrl}people`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getNextPeople(url: string): Observable<any> {
    return this.http.get(url);
  }
}
