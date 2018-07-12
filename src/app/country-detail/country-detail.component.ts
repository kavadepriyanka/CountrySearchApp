import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { } from '@types/googlemaps';

import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  @Input() country: Country;
  //for Map
  @ViewChild('gmap') gmapEle: any;
  map: google.maps.Map;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }

  ngOnInit() { 
    this.getCountry();
   }

  getCountry() : void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(name)
        .subscribe(country => {
          this.country = country[0];
          this.initMap();
        });
  }

  initMap() : void {
    var mapProp = {
      center: new google.maps.LatLng(this.country.latlng[0], this.country.latlng[1]),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapEle.nativeElement, mapProp);
  }

  goBack() : void {
    this.location.go('/countries');
  }

}
