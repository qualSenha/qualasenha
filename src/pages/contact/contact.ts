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
        this.model.nome = result.nome
        this.model.email = result.email
        this.model.dtNascimento = result.dataNascimento
        this.model.telefone = result.telefone
        this.model.cpf = result.cpf
      })
      .catch((error: any) => {
        console.log(error)
      });
  }

  ionViewDidEnter () {
    this.alunos = [];
    this.getRetornar();
  }


}

export class Usuario {
  ra: any;
  nome: any;
  senha: any;
  email: any;
  dtNascimento: any;
  telefone: any;
  cpf: any
}