import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  
  public alunos: any;
  
  model: Usuario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public servidor: ServidorProvider  
    ) {
      this.model = new Usuario()
      this.model = navParams.data      
  }
  
  getRetornar(){
    this.servidor.getConfiguracoes(this.model)
      .then((result: any) => {
        /* this.model.ra = result[0].ra;
        this.model.senha = result[0].senha; */
        console.log(result)
        for (var i = 0; i < result.length; i++) {
          var aluno = result[i];
          this.alunos.push(aluno);
        }
      })
      .catch((error: any) => {
        console.log(error)
      });
  }

  ionViewDidEnter () {
    //console.log(this.model)
    this.alunos = [];
    this.getRetornar();
  }


}

export class Usuario {
  ra: any;
  senha: any;
  email: any;
  dtNascimento: any;
  telefone: any;
}