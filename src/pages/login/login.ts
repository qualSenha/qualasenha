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
 
  entrar(dados) {
    this.navCtrl.push(TabsPage, {
      model : dados
    })
  }
    
  ionViewDidLoad() {}

  getUsuario() {
    this.servidor.getUsuario(this.model)
      .then((result: any) => {
        this.entrar(result)
      })
      .catch((error: any) => {
        console.log(error)
      });
  }
}

export class Usuario {
  ra: any;
  senha: any;
}