import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  // private lat: string;
  // private lon: string;
  // public pos: any;
  // private api_url_lat_lon: string;
  // private api_key: string = 'fd5edfc655970766ceceba9c2c68d211';

  // constructor(private httpClient: HttpClient) { }

  // getWeatherLatLon(pos){

  //   this.lat = pos.coords.latitude;
  //   this.lon = pos.coords.longitude;
  //   this.api_url_lat_lon = 'https://api.openweathermap.org/data/2.5/forecast?lat='+ this.lat +'&lon='+ this.lon +'&appid=';

  //   return  this.httpClient.get(this.api_url_lat_lon + this.api_key);
  // }

}
