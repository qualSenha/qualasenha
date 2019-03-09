import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HomeSgPage } from '../home-sg/home-sg';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

	constructor(public navCtrl: NavController) { }

	openAgendar() {
		this.navCtrl.push('HomeSgPage');
	}

}