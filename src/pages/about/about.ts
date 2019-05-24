import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomeSgPage } from '../home-sg/home-sg';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

	constructor(public navCtrl: NavController,
		public navParams: NavParams) {
			console.log('gerar', navParams.data)
		}

	openAgendar() {
		this.navCtrl.setRoot(HomeSgPage);
		}

}