import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ArtistsService {
  private baseURL = 'https://rest.bandsintown.com';
  private api_key = 'foo';

  constructor(private http: HttpClient) {
  }

  getArtistDetail(artistName): Observable<any> {
     const url = `${this.baseURL}/artists/${artistName}?app_id=${this.api_key}`;
     return this.http.get(url).pipe(
       catchError(this.handleError)
     );
  }

  getArtistEvents(artistName, eventType): Observable<any> {
     const url = `${this.baseURL}/artists/${artistName}/events?app_id=${this.api_key}${eventType ? ('&date=' + eventType) : ''}`;
     return this.http.get(url).pipe(
       catchError(this.handleError)
     );
  }

  private handleError(error: any): Observable<any> {
    return throwError(error);
  }
}
