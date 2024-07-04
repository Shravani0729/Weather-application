import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  [x:string]:any;
  WeatherForm=new FormGroup({
    location:new FormControl('')
  });
  weatherData:any;
  constructor(private weatherService:WeatherService){ }
  onSubmit(){
    console.log(this.WeatherForm);
    this.weatherService.getWeatherData(this.WeatherForm.controls.location.value??'sangli')
    .subscribe((result:any)=>{
      console.log(result);
      this.weatherData=result;
    }); 
  }

}
