import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Launch} from '../models/launch.model';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private API_BASE_URL = "https://api.spacexdata.com/v3/launches"

  constructor(private httpClient: HttpClient) { }

  public getAllLaunches(): Observable<Launch[]> {
    return this.httpClient.get<Launch[]>(this.API_BASE_URL)
  }

  public getLaunchById(id: number): Observable<Launch> {
    return this.httpClient.get<Launch>(this.API_BASE_URL + `/${id.toString()}`)
  }

  public getLaunchesByYear(year: string): Observable<Launch[]> {
    return this.httpClient.get<Launch[]>(this.API_BASE_URL + `?launch_year=${year}`)
  }
}
