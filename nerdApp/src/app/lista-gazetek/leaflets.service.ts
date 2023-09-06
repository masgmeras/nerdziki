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
  filteredGroupedLeafletsListByPageUrl: LeafletModel[][] = [];
  private fullList: LeafletModel[] = [];
  private groupedLeafletsListByPageUrl: LeafletModel[][] = [];
  selectedProduct: string = '';
  selectedProductsList: string[] = [];
  listCategoriesProducts: string[] = ['owoce'];

  constructor(private http: HttpClient) {
  }

  public getLeaflets(isMock: boolean = false): Observable<LeafletModel[]> {
    const url = 'http://firelocker.pl:3000/getLeaflets';
    const localUrl = '../assets/generate_urls.json';
    return this.http.get<LeafletModel[]>(isMock ? localUrl : url);
  }

  addProduct(itemToAdd: string) {
    this.selectedProductsList.push(itemToAdd)
  }

  removeProduct(itemToRemove: string) {
    this.selectedProductsList = this.selectedProductsList.filter(i => i !== itemToRemove);
  }


  initStoreResults(data: LeafletModel[]) {
    this.fullList = data;


    for (let leaflet of data) {
      leaflet.ocrResult = leaflet.ocrResult.toLowerCase();
    }

   /*
    for (let i: number = 0; i < data.length; i++) {
      let ocrResult: string[] = data[i].ocrResult;
      for (let j: number = 0; j < ocrResult.length; j++) {
        ocrResult[j] = ocrResult[j].toLowerCase();
      }
    }*/

    this.createGroupedLeaflets(data);
    let brands = [...new Set(data.map(leaflet => leaflet.brand))];
    this.storesList = [];
    for (let i = 0; i < brands.length; i++) {
      this.storesList.push({'brand': brands[i], 'checked': true, 'ocrResult': ['']});

    }
  }

  updateStoreResults() {
    // @ts-ignore
    let listaWybranych = this.storesList.filter(x => x.checked).map(x => x.brand);
    this.createGroupedLeaflets(this.fullList);
    this.filteredGroupedLeafletsListByPageUrl = this.groupedLeafletsListByPageUrl.filter(x => listaWybranych.includes(x[0].brand))
    let filterProduct;
    if (this.selectedProduct) {
      // filterProduct = (x: LeafletModel[]) => x.filter(x => x.ocrResult.includes(this.selectedProduct));
      console.log(this.filteredGroupedLeafletsListByPageUrl)
      // this.filteredGroupedLeafletsListByPageUrl = this.filteredGroupedLeafletsListByPageUrl.filter(filterProduct);
      let temp = [];
      for (let filteredGroupedLeafletsListByPageUrlElement of this.filteredGroupedLeafletsListByPageUrl) {
        for (let leafletModel of filteredGroupedLeafletsListByPageUrlElement) {
          if (leafletModel.ocrResult.includes(this.selectedProduct)) {
            temp.push(filteredGroupedLeafletsListByPageUrlElement);
          }
        }
      }
      this.filteredGroupedLeafletsListByPageUrl = temp;
    }
    if (this.selectedProductsList.length) {
      console.log('siema')
      //TODO
    //   filterProduct = (x: LeafletModel) => x.ocrResult.some(r => this.selectedProductsList.includes(r));
    //   this.filteredGroupedLeafletsListByPageUrl = this.filteredGroupedLeafletsListByPageUrl.filter(filterProduct);
    //   console.log(this.filteredGroupedLeafletsListByPageUrl)
    }
  }

  private createGroupedLeaflets(leafletsList: LeafletModel[]) {
    console.log(leafletsList)
    const groupByPageUrl = this.groupBy(leafletsList, "pageUrl");
    // console.log(groupByPageUrl)
    this.groupedLeafletsListByPageUrl = [];
    for (const [key] of Object.entries(groupByPageUrl)) {
      // console.log(groupByPageUrl[key])
      this.groupedLeafletsListByPageUrl.push(groupByPageUrl[key]);
    }
    this.filteredGroupedLeafletsListByPageUrl = this.groupedLeafletsListByPageUrl;
  }

  private groupBy(arr: any, key: any) {
    const initialValue = {};
    return arr.reduce((acc: any, cval: any) => {
      const myAttribute = cval[key];
      acc[myAttribute] = [...(acc[myAttribute] || []), cval]
      return acc;
    }, initialValue);
  }

}
