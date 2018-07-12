import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() countries: Country[];
  @Input() searchText: string;
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    //this.getCountries();
  }

  // getCountries(): void {
  //   this.countryService.getCountries()
  //       .subscribe(countries => this.countries = countries);

  // }

}
