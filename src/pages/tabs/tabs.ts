import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage, Usuario } from '../contact/contact';
import { HomePage } from '../home/home';

import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  model: Usuarios;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;


  constructor(public navParams: NavParams) {
    this.model = new Usuarios()
    this.model = navParams.get('model')
  }

  ionViewDidEnter () {
    console.log('oi', this.model)
  }
}

export class Usuarios {
  ra: any;
  senha: any;
  email: any;
  dtNascimento: any;
  telefone: any;
}