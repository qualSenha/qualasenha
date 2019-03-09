import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { HomeSgPage} from '../home-sg/home-sg';
import { LoginPage } from '../login/login';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController) { }

	openGerar() {
		this.navCtrl.push('HomeSgPage');
	}	

	openAgendar() {
		this.navCtrl.push(AboutPage);
	}

}