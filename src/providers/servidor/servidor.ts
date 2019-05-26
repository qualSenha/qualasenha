import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { map } from 'rxjs/operators';
import { ModuleLoader } from 'ionic-angular/umd/util/module-loader';

@Injectable()
export class ServidorProvider {

  private url = "http://4d3b1202.ngrok.io";

  constructor(public http: Http) {
    console.log('Hello ServidorProvider Provider');
  }

  getUsuario(model) {
    let body = {"ra": model.ra, "senha": model.senha};
    let link = this.url + "/usuario";
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

  getConfiguracoes(model) {
    let link = `${this.url}/usuario?ra=${model.ra}&senha=${model.senha}`
    return new Promise((resolve,reject) => {
      this.http.get(link)
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

  getSenhasMorumbi() {
    let link = `${this.url}/senhasMorumbi`

    return new Promise((resolve, reject) => {
      this.http.get(link)
        .subscribe(
          (result: any) => {
            resolve(result.json())
          },
          (error: any) => {
            reject(error.json())
          }
        )
    })
  }

  getSenhas(local) {
    let link = `${this.url}/senhas?local=${local}`

    return new Promise((resolve, reject) => {
      this.http.get(link)
        .subscribe(
          (result: any) => {
            resolve(result.json())
          },
          (error: any) => {
            reject(error.json())
          }
        )
    })
  }

  gerarSenha(ra,agendada) {
    let link = `${this.url}/senha`
    let body = { "ra": ra, "agendada": agendada}

    return new Promise((resolve, reject) => {
      this.http.post(link, body)
        .subscribe(
          (result: any) => {
            resolve(result.json())
          },
          (error: any) => {
            reject(error.json())
          }
        )
    })
  }
  
  cancelar(id) {
    let link = `${this.url}/cancelar`
    let body = { "id": id }

    return new Promise((resolve, reject) => {
      this.http.post(link, body)
        .subscribe(
          (result: any) => {
            resolve(result.json())
          },
          (error: any) => {
            reject(error.json())
          }
        )
    })
  }
  getSenhaGerada(ra) {
    let link = `${this.url}/senhaGerada?ra=${ra}`

    return new Promise((resolve, reject) => {
      this.http.get(link)
        .subscribe(
          (result: any) => {
            resolve(result.json())
          },
          (error: any) => {
            reject(error.json())
          }
        )
    })
  }

}
