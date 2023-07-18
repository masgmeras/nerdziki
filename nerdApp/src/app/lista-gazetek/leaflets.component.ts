import {Component, OnInit} from '@angular/core';
import {LeafletsService} from "./leaflets.service";
import {LeafletModel} from "./leafletModel";

@Component({
  selector: 'app-leaflets',
  templateUrl: './leaflets.component.html',
  styleUrls: ['./leaflets.component.css']
})
export class LeafletsComponent implements OnInit {
  leafletsList: LeafletModel[] = [];
  groupedLeafletsListByPageUrl: LeafletModel[] = [];
  filteredGroupedLeafletsListByPageUrl: LeafletModel[] = [];
  storesList: any = [];
  selectedStore: string = '';
  selectedProduct: string = '';
  private originalList: any;

  constructor(private leafletsService: LeafletsService) {
  }

  ngOnInit() {
    this.leafletsService.getLeaflets().subscribe(data => {
      this.leafletsList = data;
      console.log(data)
      this.createGroupedLeaflets(data);

      let brands = [...new Set(data.map(leaflet => leaflet.brand))];
      for (let i = 0; i < brands.length; i++) {
        this.storesList.push({'brand': brands[i], 'checked': true});
      }
    })
  }

  pickStore() {
    // @ts-ignore
    let listaWybranych = this.storesList.filter(x => x.checked).map(x => x.brand);

    this.filteredGroupedLeafletsListByPageUrl = this.groupedLeafletsListByPageUrl.filter(x => listaWybranych.includes(x.brand))
    if (this.selectedProduct) {
      this.filteredGroupedLeafletsListByPageUrl = this.filteredGroupedLeafletsListByPageUrl.filter(x => x.ocrResult.includes(this.selectedProduct));
      console.log(this.filteredGroupedLeafletsListByPageUrl)
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
