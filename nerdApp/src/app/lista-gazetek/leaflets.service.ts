import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LeafletModel} from "./leafletModel";
import {Observable} from "rxjs";
import {StoresListModel} from "./storesList.model";

@Injectable({
  providedIn: 'root'
})
export class LeafletsService {
  storesList: StoresListModel[] = [];
  fullList: LeafletModel[] = [];
  groupedLeafletsListByPageUrl: LeafletModel[] = [];
  filteredGroupedLeafletsListByPageUrl: LeafletModel[] = [];
  selectedProduct: string = '';
  selectedProductsList: string[] = [];


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


  addProduct(itemToAdd: string) {
    this.selectedProductsList.push(itemToAdd)
  }

  removeProduct(itemToRemove: string) {
    this.selectedProductsList = this.selectedProductsList.filter(i => i !== itemToRemove);
  }

  updateStoreResults() {
    // @ts-ignore
    let listaWybranych = this.storesList.filter(x => x.checked).map(x => x.brand);
    this.groupedLeafletsListByPageUrl = this.fullList;
    this.filteredGroupedLeafletsListByPageUrl = this.groupedLeafletsListByPageUrl.filter(x => listaWybranych.includes(x.brand))
    let filterProduct;
    if (this.selectedProduct) {
      filterProduct = (x: LeafletModel) => x.ocrResult.includes(this.selectedProduct);
      this.filteredGroupedLeafletsListByPageUrl = this.filteredGroupedLeafletsListByPageUrl.filter(filterProduct);
    }
    if(this.selectedProductsList.length) {
      filterProduct = (x: LeafletModel) => x.ocrResult.some(r => this.selectedProductsList.includes(r));
      this.filteredGroupedLeafletsListByPageUrl = this.filteredGroupedLeafletsListByPageUrl.filter(filterProduct);
    }

  }

}
