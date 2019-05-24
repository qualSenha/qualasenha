import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'
import { HomeSgPage } from '../home-sg/home-sg';
import { ServidorProvider } from '../../providers/servidor/servidor';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	public senhas: any;
	local: any

	constructor(
		public toast: ToastController,
		public navCtrl: NavController,
		public alertCtrl: AlertController,
		public servidor: ServidorProvider,
		public navParams: NavParams) {
			this.local = navParams.data.localAtendimento
		}

	showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Senha gerada com sucesso!',
      buttons: ['OK'],
    });
    alert.present();
	}

	ionViewDidEnter() {
		this.senhas = []
		this.getSenhasMorumbi()
	}
	
	getSenhasMorumbi() {
    this.servidor.getSenhasMorumbi()
      .then((result: any) => {
        if(result) {
          for (var i = 0; i < result.length; i++) {
						var senha = result[i];
						this.senhas.push(senha);
					}
        } else {
          this.toast.create({ message: 'Usuário incorreto', position: 'botton', duration: 3000}).present()
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Falha no sistema', position: 'botton', duration: 3000}).present()
      });
	}
	
	getSenhas() {
		this.servidor.getSenhas(this.local)
			.then(
				(result: any) => {
					console.log(result)
				}
			)
			.catch(
				(error: any) => {
					this.toast.create({ message: 'Falha no sistema', position: 'botton', duration: 3000}).present()
				}
			)
	}

  	openGerar() {
		this.navCtrl.setRoot(HomeSgPage);
	}
}