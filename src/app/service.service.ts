import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Apikey='4d416df6ed2440d9aa7120611240107';

  constructor(private http:HttpClient) { }
  getWeatherData(location:string){
    return this.http.get('https://api.Weatherapi.com/V1/Current.json?q-'+location+'7key-'+this.Apikey)
  }
}
