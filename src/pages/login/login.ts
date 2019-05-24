import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { ServidorProvider } from '../../providers/servidor/servidor';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  model: Usuario;

  constructor(
    public toast: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public servidor: ServidorProvider,
    public http: Http ) {
    this.model = new Usuario();
  }
 
  entrar(dados, campus) {
    this.navCtrl.push(TabsPage, {
      model : dados,
      campus : campus
    })
  }

  ionViewDidLoad() {}

  getUsuario() {
    this.servidor.getUsuario(this.model)
      .then((result: any) => {
        if(result) {
          this.entrar(result, this.model.localAtendimento)
        } else {
          this.toast.create({ message: 'Usuário incorreto', position: 'botton', duration: 3000}).present()
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Falha no sistema', position: 'botton', duration: 3000}).present()
      });
  }
}

export class Usuario {
  ra: any;
  senha: any;
  localAtendimento: any;
}