/*jslint es6 single white*/

import { Component, Inject } from '@angular/core';
import {NavParams}  from 'ionic-angular';

@Component({
    selector:'country-details',
    templateUrl:'country-details.html'
})
export class CountryDetails {
    countryDetails;
    navParams;

    constructor(@Inject(NavParams) navParams) {
        this.navParams = navParams;
        var geoNameUrl = 'http://geonames.org/flags/x/';
        this.countryDetails = this.navParams.get('countryDetails')
        this.countryDetails.flag = geoNameUrl + this.countryDetails.alpha2Code.toLowerCase() + '.gif';
    }
}