import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { map } from 'rxjs/operators';
import { ModuleLoader } from 'ionic-angular/umd/util/module-loader';

@Injectable()
export class ServidorProvider {

  private url = "http://localhost:8880/";

  constructor(public http: Http) {
    console.log('Hello ServidorProvider Provider');
  }

  getUsuario(model) {
    let body = {"ra": model.ra, "senha": model.senha};
    let link = this.url + "usuario";
    return new Promise((resolve,reject) => {
      this.http.post(link, body)
      .subscribe(
        (result: any) => {
          resolve(result.json());
        },
        (error: any) => {
          reject(error.json());
        }
      );
    });
  }

}
