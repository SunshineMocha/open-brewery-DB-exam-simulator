import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Breweries } from 'src/app/models/breweries';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly API_URL = 'https://api.openbrewerydb.org/v1/breweries';

  constructor(private http: HttpClient) { }

  getBreweries(): Observable<Breweries[]>{
    return this.http.get<any>(this.API_URL)
  }

}
