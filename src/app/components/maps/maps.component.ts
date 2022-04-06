import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  title = 'google-maps';

  private map: google.maps.Map

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyA5MOXWAOexd34EJx0E8Ak5gWje0tMz8p0'
    })

    loader.load().then(() => {
      console.log('loaded gmaps')

      const location = { lat: 51.233334, lng: 	6.783333 }

      this.map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 6
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }

}
