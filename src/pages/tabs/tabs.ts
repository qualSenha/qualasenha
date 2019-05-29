import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage, Usuario } from '../contact/contact';
import { HomePage } from '../home/home';


import { NavParams } from 'ionic-angular';
import { HomeSgPage } from '../home-sg/home-sg';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  model: Usuarios;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = HomeSgPage;


  constructor(public navParams: NavParams) {
    this.model = new Usuarios()
    this.model = navParams.get('model')
    this.model.localAtendimento = navParams.get('campus')
  }

  ionViewDidEnter () {
  }
}

export class Usuarios {
  ra: any;
  senha: any;
  localAtendimento: any;
  senhaAtendimento: any;
}