import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { cityLimit } from 'src/app/cityLimit';
import { IWeather } from 'src/app/Iweather';
import { A } from 'src/app/a';

@Injectable()
export class WeatherService {

  private _base_url =  "http://localhost:8080/weather";
  private _car_url ="http://localhost:8080/api/v1/revisions/geta/1";

  private _all_weather_url: string = this._base_url+"/all";
  private _city_weather_url: string = this._base_url+"/city/espoo";
  private _city_weather_limit_url: string = this._base_url+"/limit/espoo";

  constructor(private http: HttpClient) { }

  public getAllWeather(): Observable<IWeather[]>{
    return this.http.get<IWeather[]>(this._all_weather_url);
  }


  public getLimit(): Observable<cityLimit[]>{
    return this.http.get<cityLimit[]>(this._city_weather_limit_url);
  }

  public getMultipleWeather(){
    let cityWeather = this.http.get(this._city_weather_url);
    let cityWeatherLimit = this.http.get(this._city_weather_limit_url);

    forkJoin([cityWeather, cityWeatherLimit]).subscribe(results => {
      console.log("forkJoin results[0] " + JSON.stringify((results[0])));
      console.log("forkJoin results[1] " + JSON.stringify(results[1]));

    });
  }

  public getWarehouse(): Observable<A[]> {
    return this.http.get<A[]>(this._car_url);
  }

}
