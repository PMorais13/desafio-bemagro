import { Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() set diretiveMap(coordinates: any) {
    this.initMap(coordinates);
    this.markMap(coordinates);
  }

  private map: any;

  constructor() { }

  private initMap(coordinates: any): void {

    const definedCoordinates = {
      y: (coordinates?.features[0]?.center[1]) || -13.01870704474433,
      x: (coordinates?.features[0]?.center[0]) || -49.82322974135813,
      z: (coordinates?.features[0]?.center[0]) ? 14 : 4
    }

    if (this.map) {
      this.map.setView(new L.LatLng(definedCoordinates.y, definedCoordinates.x), definedCoordinates.z);
      return
    }

    this.map = L.map('map', {
      center: [definedCoordinates.y, definedCoordinates.x],
      zoom: definedCoordinates.z
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);


  }

  private markMap(coordinates: any): void {
    if(!coordinates){
      return
    }

    const definedCoordinates = {
      y: (coordinates?.features[0]?.center[1]) || -13.01870704474433,
      x: (coordinates?.features[0]?.center[0]) || -49.82322974135813,
    }

    const circle = L.circle([definedCoordinates.y, definedCoordinates.x], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.map);

  }
}

