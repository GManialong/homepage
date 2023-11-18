import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FlippableCardComponent } from './flippable-card/flippable-card.component';
import { MapComponent } from './map/map.component';
import { map } from 'leaflet';

@NgModule({
  declarations: [AppComponent, FlippableCardComponent, MapComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgApexchartsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
