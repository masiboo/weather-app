import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'weatherService/weather.service';
import { IWeather } from 'src/app/Iweather';
import { cityLimit } from '../cityLimit';
import { A } from 'src/app/a';

@Component({
  selector: 'app-weather',
  providers: [WeatherService],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public weathers: IWeather[] | undefined;

  public stringLimit: string | undefined; 

  public a: A[] | undefined;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void { 

  }

  getAllWeather(){
    this._weatherService.getAllWeather()
    .subscribe( data => this.weathers = data);

  }

  getMultipleWeather(){
    let rest;
    this._weatherService.getMultipleWeather();
    //.subscribe( data => rest = data);

  }

  getLimit(){
    this._weatherService.getLimit()
    .subscribe( data => {
      const myLimit = JSON.parse(JSON.stringify(data));
      this.stringLimit = myLimit.limit
      console.log(this.stringLimit)
    });
  }

  public getWarehouse(){
    this._weatherService.getWarehouse()
    .subscribe( data => {
      this.a = JSON.parse(JSON.stringify(data)) as A[];
      console.log('a data: '+(JSON.stringify(this.a) ));

    });
  }

}
