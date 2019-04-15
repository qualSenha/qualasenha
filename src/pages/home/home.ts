import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'
import { HomeSgPage } from '../home-sg/home-sg';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	constructor(
	public navCtrl: NavController,
	public alertCtrl: AlertController) { }

	showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Senha gerada com sucesso!',
      buttons: ['OK'],
    });
    alert.present();
  }

  	openGerar() {
		this.navCtrl.setRoot(HomeSgPage);
	}	



}

