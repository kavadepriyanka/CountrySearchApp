import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

import { Country } from './country';
import { COUNTRIES } from './mock-country';
import { MessageService } from './message.service';

@Injectable()
export class CountryService {
  private allUrl = 'https://restcountries.eu/rest/v2/all';

  constructor(
    private msgService: MessageService,
    private httpClient: HttpClient
  ) { }

  getCountries(): Observable<Country[]> {
    this.msgService.add('CountryService: Fetched Countries');
    //return of(COUNTRIES);
    return this.httpClient.get<Country[]>(this.allUrl);
  }

  getCountry(name: string): Observable<Country[]> {
    const specificUrl = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;
    this.msgService.add(`CountryService: fetched country name=${name}`);
    //return of(COUNTRIES.find(country => country.name == name));
    return this.httpClient.get<Country[]>(specificUrl);
  }

}
