import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LeafletModel} from "./leafletModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LeafletsService {
  storesList: any = [];
  
  constructor(private http: HttpClient) {
  }

  getData() {
    // this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.get('http://firelocker.pl:3000/getLeaflets')
      .subscribe(data => {
        //console.log(data);
        return data;
        // handle the data
      });
  }

  public getLeaflets(): Observable<LeafletModel[]> {
    const url = 'http://firelocker.pl:3000/getLeaflets';
    const localUrl = '../assets/generate_urls.json';
    return this.http.get<LeafletModel[]>(localUrl);
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
