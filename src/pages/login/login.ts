import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { ServidorProvider } from '../../providers/servidor/servidor';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  ra: string;
  senha: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public servidor: ServidorProvider,
    public http: Http ) {
  }

  Login() {
		if(this.ra == undefined || this.senha == undefined){
      let alert = this.alertCtrl.create({
        title:"Atenção",
        message:"Preencha todos os dados",
        buttons:['OK']
      })
      alert.present();
    }else{

      this.http.get(this.servidor.urlGet()+'login.php?ra='+this.ra+'&senha='+this.senha).pipe(map( res => res.json()))
      .subscribe(
        dados =>{
          if(dados.msg.logado == "sim"){
            
            this.navCtrl.setRoot(TabsPage);
          }else{
            let alert = this.alertCtrl.create({
              title:"Atenção",
              message:"Usuario ou senha invalido",
              buttons: ['OK']
            })
            alert.present();
          }

        }
      )

    }

  }


  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
