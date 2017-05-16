/*jslint es6 single white*/

import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {
  navCtrl
  constructor(@Inject(NavController) navCtrl) {
    this.navCtrl = navCtrl;
  }
}
