import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  
  public alunos: any;
 
  

  constructor(
    public navCtrl: NavController,
    public servidor: ServidorProvider    
    ) {

      this.getRetornar();
      
  }
  
  getRetornar(){

    this.servidor.getPegar()
    .subscribe(
      data => this.alunos = data,
      err => console.log(err)
    );
  }


}
