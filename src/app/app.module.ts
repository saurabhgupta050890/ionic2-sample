/*jslint es6 single white */

/*property
  charAt, slice, _$_
*/ 

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CountryApp } from './app.component';
import { CountryList } from '../pages/countryList/countrylist';
import { CountryDetails } from '../pages/countryDetails/countrydetails';
import { CountryService } from './country.service';
import { Home } from '../pages/home/home';
//import { Page2 } from '../pages/page2/page2';

@NgModule({
  declarations: [
    CountryApp,
    Home,
    CountryList,
    CountryDetails
  ],
  imports: [
    IonicModule.forRoot(CountryApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CountryApp,
    Home,
    CountryList,
    CountryDetails
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, CountryService]
})
export class AppModule {}
