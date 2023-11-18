// Import Angular modules
import { Component, OnInit } from '@angular/core';

// Import Leaflet and Geolocation API
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map!: L.Map;

  // ...

  private async initMap(): Promise<void> {
    try {
      // Get user's location
      const userPosition = await this.getUserLocation();
  
      // Set up the map
      this.map = L.map('map', {
        center: [userPosition.coords.latitude, userPosition.coords.longitude],
        zoom: 12
      });
  
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
  
      // Add marker for user's location
      const userMarker = L.marker([userPosition.coords.latitude, userPosition.coords.longitude])
        .addTo(this.map);
  
      tiles.addTo(this.map);
    } catch (error) {
      console.error('Error getting user location:', error);
      // Handle error gracefully
    }
  }
  

  private getUserLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          (error) => reject(error)
        );
      } else {
        reject('Geolocation is not supported by your browser.');
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
}
