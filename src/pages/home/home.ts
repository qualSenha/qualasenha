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
	model: Usuario;

	constructor(
		public toast: ToastController,
		public navCtrl: NavController,
		public alertCtrl: AlertController,
		public servidor: ServidorProvider,
		public navParams: NavParams) {
			this.model = new Usuario()
			this.model.senha = navParams.data.senhaAtendimento
			this.model.ra = navParams.data.ra
			this.model.localAtendimento = navParams.data.localAtendimento
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
		//this.getSenha()
	}
	
	getSenhasMorumbi() {
    this.servidor.getSenhasMorumbi()
      .then((result: any) => {
        if(result) {
          for (var i = 0; i < result.length; i++) {
						var senha = result[i];
						this.senhas.push(senha);
					} 
					this.getSenha()
        } else {
          this.toast.create({ message: 'Usuário incorreto', position: 'botton', duration: 3000}).present()
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Falha no sistema', position: 'botton', duration: 3000}).present()
      });
	}
	
	getSenhas() {
		this.servidor.getSenhas(this.model.localAtendimento)
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
		gerarSenha() {
		this.servidor.gerarSenha(this.model.ra,false)
			.then(
				(result: any) => {
					if(result) {
						this.model.senha = result.ID
					}
					console.log(result)
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

	cancelarSenha() {
		this.servidor.cancelar(this.model.senha)
			.then(
				(result: any) => {
					if(result) {
						this.model.senha = false
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
	getSenha() {
    this.servidor.getSenhaGerada(this.model.ra)
      .then((result: any) => { 
        if(result.senha) {
        this.model.senha=result.senha}
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Falha no sistema', position: 'botton', duration: 3000}).present()
      });
	}
}
export class Usuario {
  ra: any;
	localAtendimento: any;
	senha: any;
}