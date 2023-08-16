import { Component, OnInit } from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";
import {LeafletModel} from "../lista-gazetek/leafletModel";
import {StoreModel} from "../lista-gazetek/storeModel";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
leafletsList: LeafletModel[] = [];
     productList: LeafletModel[] = [];
     selectedProduct: string = '';
      groupedLeafletsListByPageUrl: LeafletModel[] = [];
       filteredGroupedLeafletsListByPageUrl: LeafletModel[] = [];
       storesList: StoreModel[] = [];

 constructor(private leafletsService: LeafletsService) {
  }

       ngOnInit() {
           this.leafletsService.getLeaflets().subscribe(data => {
             this.leafletsList = data;
             console.log(data)

             for (let i = 0; i < data.length; i++) { // 0 -> 365
               let ocrResult = data[i].ocrResult; // 0 ['od poniedziałku', 'od pomiedziaeku, 17.07',]
               for (let j = 0; j < ocrResult.length; j++) {
                 ocrResult[j] = ocrResult[j].toLowerCase();
               }
             }

             this.createGroupedLeaflets(data);

             let brands = [...new Set(data.map(leaflet => leaflet.brand))];
             for (let i = 0; i < brands.length; i++) {
               this.storesList.push({'brand': brands[i], 'checked': true, 'ocrResult': ['']});

             }
           })
         }


   szukaj(){
     this.productList= this.leafletsList.filter(x => x.ocrResult.includes(this.selectedProduct));
     console.log(this.productList);
     }

  updateStoreResults() {
    // @ts-ignore
    let listaWybranych = this.storesList.filter(x => x.checked).map(x => x.brand);
    //console.log(this.storesList)

    this.filteredGroupedLeafletsListByPageUrl = this.groupedLeafletsListByPageUrl.filter(x => listaWybranych.includes(x.brand))
    if (this.selectedProduct) {
      this.filteredGroupedLeafletsListByPageUrl = this.filteredGroupedLeafletsListByPageUrl.filter(x => x.ocrResult.includes(this.selectedProduct));


    }

    console.log(this.filteredGroupedLeafletsListByPageUrl)
  }

  private createGroupedLeaflets(leafletsList: LeafletModel[]){
    const groupByPageUrl = this.groupBy(leafletsList, "pageUrl");
    for (const [key] of Object.entries(groupByPageUrl)) {
      this.groupedLeafletsListByPageUrl.push(groupByPageUrl[key][0]);
    }
    this.filteredGroupedLeafletsListByPageUrl = this.groupedLeafletsListByPageUrl;
  }

  private groupBy(arr: any, key: any) {
    const initialValue = {};
    return arr.reduce((acc: any, cval:any) => {
      const myAttribute = cval[key];
      acc[myAttribute] = [...(acc[myAttribute] || []), cval]
      return acc;
    }, initialValue);
  }


}
