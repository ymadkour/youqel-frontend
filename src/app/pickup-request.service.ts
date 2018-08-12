import { Injectable } from '@angular/core';
import { PickupRequest } from './pickup-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PickupRequestService {

  private heroesUrl = 'http://localhost:8080/youqel/rest/api/pickup-request';

  constructor(
    private http: HttpClient) { }

  addPickupRequest(request: PickupRequest) {
    console.log(request)
    console.log(this.http)
    this.http.post<PickupRequest>(this.heroesUrl, request, httpOptions).subscribe(
      res => {
        console.log(res);
      }
    );
    console.log('Done sending request')

  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}