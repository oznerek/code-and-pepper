import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  private readonly baseUrl = `${environment.apiUrl}starships`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getNextStarships(url: string): Observable<any> {
    return this.http.get(url);
  }
}
