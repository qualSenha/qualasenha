import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServidorProvider } from './../../providers/servidor/servidor';
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model:User;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private servidorProvider: ServidorProvider) {
    
      this.model = new User();
      this.model.ra = '';
      this.model.password = '';
  }

  Login() {
    this.servidorProvider.login(this.model.ra, this.model.password)
      .then((result: any) => {
                this.toast.create({ message: 'Usuário logado com sucesso.', position: 'botton', duration: 3000 }).present();
                this.navCtrl.push(TabsPage);
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
        
	}
 
  }

  export class User {
  ra: string;
  password: string;
}


