import {Component} from '@angular/core';
import {GoogleMapsModule} from "@angular/google-maps";
import {CardModule} from "primeng/card";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [GoogleMapsModule, CardModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  public mapOptions: google.maps.MapOptions = {
    mapId: 'bucik',
    center: {lat: 52.246830, lng: 15.534752},
    zoom: 18,
  };

  openInMap() {
    const url = `https://maps.app.goo.gl/NPNiKXfqAdCByRVTA`;
    window.open(url, '_blank');
  }
}
