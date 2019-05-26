import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HomeSgPage } from '../home-sg/home-sg';
import { ServidorProvider } from '../../providers/servidor/servidor';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})

export class AboutPage {
	model: Usuario;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public servidor: ServidorProvider,
		public alertCtrl: AlertController,
		public toast: ToastController) {
		this.model = new Usuario()
		this.model.ra = navParams.data.ra
		this.model.localAtendimento = navParams.data.localAtendimento
	}

	openAgendar() {
		this.navCtrl.setRoot(HomeSgPage);
	}

	gerarSenha() {
		this.servidor.gerarSenha(this.model, true)
			.then(
				(result: any) => {
					if (result) {
						this.navParams.data.senhaAtendimento = result.ID
						this.showAlert(result.ID)
						//this.navCtrl.push('HomePage')
					}
				}
			)
			.catch(
				(error: any) => {
					this.toast.create({
						message: 'Falha no sistema',
						position: 'botton',
						duration: 3000
					}).present()
				}
			)
	}
	showAlert(senha) {
		const alert = this.alertCtrl.create({
			title: 'Sucesso!',
			subTitle: `Sua senha agendada é: ${senha}`,
			buttons: ['OK'],
		});
		alert.present();
	}

}
export class Usuario {
	ra: any;
	localAtendimento: any;
	senha: any;
	senhaAtendimento: any;
}