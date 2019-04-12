import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServidorProvider {
	private url = ''

  constructor(public http: Http) { }

  login(ra: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        ra: ra,
        password: password
      };
 
      this.http.post(this.url + 'login', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 }