/*jslint es6 single white*/

import { Component, ViewChild , Inject} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { CountryList } from '../pages/countryList/countrylist';
import { Home } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class CountryApp {
  @ViewChild(Nav) nav;

  rootPage = Home;
  platform;
  regions = ['Asia', 'Africa', 'Europe', 'Americas', 'Oceania'];

  //pages: Array<{title: string, component: any}>;

  constructor(@Inject(Platform) platform) {
    this.platform = platform;
    this.initializeApp();

    // used for an example of ngFor and navigation
    /*this.pages = [
      { title: 'Welcome', component: Page1 },
      { title: 'Page Two', component: Page2 }
    ];*/
  }

  initializeApp() {
    this.platform.ready().then(function() {
      console.log("Platform ready");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    switch (page) {
      case 'home':
        this.nav.setRoot(Home);
        break;
      default:
        this.nav.setRoot(Home);
    }
  }

  getCountries(region) {
    this.nav.setRoot(CountryList, {region: region});
  }
}
