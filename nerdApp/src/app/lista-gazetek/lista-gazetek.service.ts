import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListaGazetekService {

  constructor(private http: HttpClient) {
  }

  getData() {
    // this.http.get('https://jsonplaceholder.typicode.com/users')
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(data => {
        console.log(data);
        return data;
        // handle the data
      });
  }

  getSpecificUser(nrUzytkownika: string) {
    this.http.get('https://jsonplaceholder.typicode.com/users/' + nrUzytkownika)
      .subscribe(data => {
        console.log(data);
        return [data];
        // handle the data
      });
  }
}
