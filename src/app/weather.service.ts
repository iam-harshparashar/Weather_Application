import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) {}
  getData(cityName: string) {
    return this._http.get(
      'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499'
    );
  }
}
