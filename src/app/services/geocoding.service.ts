import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http: HttpClient) { }

  public geocoding: string = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

  public key: string = '.json?access_token=pk.eyJ1IjoicG1vcmFpczEzIiwiYSI6ImNrcTdnN3JkeDA1ZW8ycnF5MHJ2dXRveDIifQ.vqHWufiyA8Unk4KqySiHKg'

  /**
   * pega as cordenadas de acordo com a localização que se é passada
   * @param location
   * @returns
   */
  public getCoordinates(location: string): Observable<any>{
    return this.http.get(this.geocoding+location+this.key);
  }
}
