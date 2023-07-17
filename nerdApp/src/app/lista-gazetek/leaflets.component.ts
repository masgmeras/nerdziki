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
  storesList: string[] = [];
  selectedStore: string = '';

  constructor(private leafletsService: LeafletsService) {
  }

  ngOnInit() {
    this.leafletsService.getLeaflets().subscribe(data => {
      this.leafletsList = data;
      this.createGroupedLeaflets(data);
      this.storesList = [...new Set(data.map(leaflet => leaflet.brand))];
    })
  }

  pickStore(selectedStore: string) {
    this.selectedStore = selectedStore;
  }

  private createGroupedLeaflets(leafletsList: LeafletModel[]){
    const groupByPageUrl = this.groupBy(leafletsList, "pageUrl");
    for (const [key] of Object.entries(groupByPageUrl)) {
      this.groupedLeafletsListByPageUrl.push(groupByPageUrl[key][0]);
    }
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
