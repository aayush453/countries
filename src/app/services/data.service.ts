import { CountryApiResponse } from '../models/countries.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<CountryApiResponse> {
    const url = 'https://api.first.org/data/v1/countries'
    return this.http.get<any>(url);
  }
}
