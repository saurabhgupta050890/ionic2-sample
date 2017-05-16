/*jslint es6 single white*/

import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService {
    url = 'https://restcountries.eu/rest/v2/';

    http;

    constructor(@Inject(Http) http) {
        this.http = http;
    }

    getCountryListByRegion(region) {
        return this.http.get(this.url + 'region/' + region)
                        .map(function (data) {
                            return data.json() || [];
                        })
                        .catch(err => console.log(err))
                        ;
    }
}