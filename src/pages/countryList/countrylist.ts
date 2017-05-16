/*jslint es6 single white*/

import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CountryService } from '../../app/country.service';
import { CountryDetails } from '../countryDetails/countrydetails';


@Component({
    selector: 'country-list',
    templateUrl: 'countrylist.html'
})
export class CountryList {

    region;
    navCtrl;
    navParams;
    countryService;
    countries = [];
    filteredCountries = [];

    constructor( @Inject(NavController) navCtrl, @Inject(NavParams) navParams, @Inject(CountryService) countryService) {
        var vm = this;
        this.navCtrl = navCtrl;
        this.region = navParams.get('region');
        var rx = countryService.getCountryListByRegion(vm.region);

        rx.subscribe(function (data) {
            vm.countries = data;
            vm.filteredCountries = data;
        });
    }

    serachCountries(ev) {
        this.filteredCountries = this.countries;
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.filteredCountries = this.filteredCountries.filter(function (country) {
                return country.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    }

    loadCountryDetails(country) {
        this.navCtrl.push(CountryDetails, {
            countryDetails: country
        });
    }

}
